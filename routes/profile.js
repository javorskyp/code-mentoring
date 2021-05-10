const express = require("express");
const router = express.Router();
const auth = require("../config/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../models/Profile");
const User = require("../models/User");

//@route GET /profile/me
//@desc  Get current user profile
//acess  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", [
      "facebook.name",
      "google.name",
      "google.photo",
      "github.name",
      "github.profileUrl",
      "github.photo"
    ]);
    if (!profile)
      return res.status(400).json({ msg: "There is no profile for this user" });
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST /profile
// @desc     Create or update user profile
// @acess    Private
router.post(
  "/",
  [
    auth,
    [
      check("status", "Status is required")
        .not()
        .isEmpty(),
      check("teacher", "Teacher is required")
        .not()
        .isEmpty(),
      check("available", "Available is required")
        .not()
        .isEmpty(),
      check("skills", "Skills is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const {
      teacher,
      available,
      company,
      website,
      location,
      bio,
      status,
      skills
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (status) profileFields.status = status;
    if (teacher) profileFields.teacher = teacher;
    if (available) profileFields.available = available;
    if (skills)
      profileFields.skills = skills.split(",").map(skill => skill.trim());
    profileFields.company = company || "";
    profileFields.website = website || "";
    profileFields.location = location || "";
    profileFields.bio = bio || "";

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      //Create profile if there isn't
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Erorr");
    }
  }
);

// @route    GET /profile
// @desc     Get all profiles
// @acess    Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "facebook.name",
      "google.name",
      "google.photo",
      "github.name",
      "github.profileUrl",
      "github.photo"
    ]);
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET /profile/user/:user_id
// @desc     Get profile by user ID
// @acess    Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", [
      "facebook.name",
      "google.name",
      "google.photo",
      "github.name",
      "github.profileUrl",
      "github.photo"
    ]);
    if (!profile) return res.status(400).json({ msg: "Profile not found" });
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind == "ObjectId")
      return res.status(400).json({ msg: "Profile not found" });
    res.status(500).send("Server Error");
  }
});

// @route    DELETE /profile/
// @desc     Delte profile, user & posts
// @acess    Private
router.delete("/", auth, async (req, res) => {
  try {
    // ADD AFTER POSTS
    // Remove users posts
    // await Post.deleteMany({ user: req.user.id });

    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json("User deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT /profile/experience
// @desc     Add profile experience
// @acess    Private
router.put(
  "/experience",
  [
    auth,
    [
      check("title", "Title is required")
        .not()
        .isEmpty(),
      check("company", "Company is required")
        .not()
        .isEmpty(),
      check("from", "From is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const {
      title,
      company,
      from,
      to,
      location,
      current,
      description
    } = req.body;

    const newExp = {
      title,
      company,
      from,
      to,
      location,
      current,
      description
    };
    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(newExp);
      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE /profile/experience/:exp_id
// @desc     Remove experience by id from profile
// @acess    Private
router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $pull: { experience: { _id: req.params.exp_id } } },
      { new: true }
    );
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT /profile/education
// @desc     Add profile education
// @acess    Private
router.put(
  "/education",
  [
    auth,
    [
      check("school", "School is required")
        .not()
        .isEmpty(),
      check("degree", "Degree is required")
        .not()
        .isEmpty(),
      check("fieldofstudy", "Fieldofstudy is required")
        .not()
        .isEmpty(),
      check("from", "From is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    };
    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.education.unshift(newEdu);
      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE /profile/education/:edu_id
// @desc     Remove education by id from profile
// @acess    Private
router.delete("/education/:edu_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $pull: { education: { _id: req.params.edu_id } } },
      { new: true }
    );
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

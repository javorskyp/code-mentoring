const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const auth = require("../config/auth");
const multer = require("multer");

//@route  POST /users
//@desc Register user
//acess Public
router.post(
  "/signup",
  passport.authenticate("local-signup"),
  (req, res) => {
    res.send(req.user);
  },
  (error, req, res, next) => res.status(401).send({ error: error.message })
);

//@route  POST /users/login
//@desc Login user
//acess Public
router.post(
  "/login",
  passport.authenticate("local-login"),
  (req, res) => {
    res.send(req.user);
  },
  (error, req, res, next) => res.status(401).send({ error: error.message })
);

//@route  GET /users/me
//@desc Get logged in user
//acess Private
router.get(
  "/me",
  auth,
  (req, res) => res.send(req.user),
  (error, req, res, next) => res.status(401).send({ error: error.message })
);

//@route  GET /users/logout
//@desc Logout user
//acess Private
router.get("/logout", auth, (req, res) => {
  req.logout();
  res.send("Logout");
});

//@route POST /users/me/upload
//@desc  Add avatar photo
//acess  Private
const upload = multer({
  limits: { fileSize: 100000 },
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/))
      return callback(new Error("Only images"));
    callback(undefined, true);
  }
});
router.post(
  "/me/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      user.avatar = req.file.buffer;
      await user.save();
      res.json(user.id);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  },
  (error, req, res, next) => res.status(400).send({ error: error.message })
);

//@route GET /users/:id/avatar
//@desc  Add avatar photo
//acess  Private
router.get("/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) throw new Error("User not found");
    res.set("Content-Type", "image/jpg");
    res.send(user.avatar);
  } catch (error) {
    res.status(404).send();
  }
});
// Access to photo: http://localhost:5000/users/5da5cc0ca583dfa1074cd52b/avatar

//@route DELETE /users/me/upload
//@desc  Remove avatar photo
//acess  Private
router.delete("/me/avatar", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.avatar = undefined;
    await user.save();
    res.json(user.id);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;

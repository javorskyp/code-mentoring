const express = require("express");
const router = express.Router();
const passport = require("passport");
require("dotenv").config();

//@route  GET api/auth
//@desc   Get logged user
//acess   Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

//@route  POST api/auth
//@desc   Auth user & get token(Log in)
//acess   Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

router.get("/facebook", passport.authenticate("facebook", { scope: "email" }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    console.log(req.user);
    res.redirect(`${process.env.APP_HOME_URL}/`);
  }
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  console.log(req.user);
  res.redirect(`${process.env.APP_HOME_URL}/`);
});

router.get("/github", passport.authenticate("github"));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: `${process.env.APP_HOME_URL}/profile`
  }),
  (req, res) => {
    console.log(req.user);
    res.redirect(`${process.env.APP_HOME_URL}/`);
  }
);

module.exports = router;

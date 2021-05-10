require("dotenv").config();
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github").Strategy;
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../models/User");
module.exports = passport => {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      user.password = undefined;
      user.avatar = undefined;
      done(err, user);
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          let user = await User.findOne({ email });
          if (user) {
            return done(
              {
                message: "That email is already registered"
              },
              false
            );
          }
          if (password.length < 6)
            return done(
              {
                message: "Password must be minimum 6 characters"
              },
              false
            );
          user = new User({ email, password });
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);
          await user.save();
          user.password = undefined;
          user.avatar = undefined;
          done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      })
        .then(user => {
          if (!user) {
            return done(
              {
                message: "That email is not registered"
              },
              false
            );
          }

          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              user.password = undefined;
              user.avatar = undefined;
              return done(null, user);
            } else {
              return done({ message: "Password incorrect" }, false);
            }
          });
        })
        .catch(error => done(error));
    })
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: "/auth/facebook/callback"

        //ADD URL TO FACEBOOK SITE AFTER DEPLOY: https://developers.facebook.com/apps/
      },
      function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        User.findOne({ "facebook.id": profile.id }, function(err, user) {
          if (err) return done(err);
          if (user) return done(null, user);
          else {
            // if there is no user found with that facebook id, create them
            const newUser = new User();
            // set all of the facebook information in our user model
            newUser.facebook.id = profile.id;
            newUser.facebook.token = accessToken;
            newUser.facebook.name = profile.displayName;
            if (
              typeof profile.emails !== "undefined" &&
              profile.emails.length > 0
            )
              newUser.facebook.email = profile.emails[0].value;
            // save our user to the database
            newUser.save(function(err) {
              if (err) throw err;
              return done(null, newUser);
            });
          }
        });
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        // callbackURL: `${process.env.APP_HOME_URL}/auth/google/callback`
        callbackURL: `/auth/google/callback`
      },
      function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        User.findOne({ "google.id": profile.id }, function(err, user) {
          if (err) return done(err);
          if (user) return done(null, user);
          else {
            // if there is no user found with that google id, create them
            const newUser = new User();
            // set all of the google information in our user model
            newUser.google.id = profile.id;
            newUser.google.token = accessToken;
            newUser.google.name = profile.displayName;
            if (
              typeof profile.emails !== "undefined" &&
              profile.emails.length > 0
            )
              newUser.google.email = profile.emails[0].value;
            if (
              typeof profile.photos !== "undefined" &&
              profile.photos.length > 0
            )
              newUser.google.photo = profile.photos[0].value;
            // save our user to the database
            newUser.save(function(err) {
              if (err) throw err;
              return done(null, newUser);
            });
          }
        });
      }
    )
  );

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GIT_ID,
        clientSecret: process.env.GIT_SECRET,
        callbackURL: `/auth/github/callback`
      },
      function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        User.findOne({ "github.id": profile.id }, function(err, user) {
          if (err) return done(err);
          if (user) return done(null, user);
          else {
            // if there is no user found with that github id, create them
            const newUser = new User();
            // set all of the github information in our user model
            newUser.github.id = profile.id;
            newUser.github.token = accessToken;
            newUser.github.name = profile.displayName;
            newUser.github.profileUrl = profile.profileUrl;
            if (
              typeof profile.emails !== "undefined" &&
              profile.emails.length > 0
            )
              newUser.github.email = profile.emails[0].value;
            if (
              typeof profile.photos !== "undefined" &&
              profile.photos.length > 0
            )
              newUser.github.photo = profile.photos[0].value;
            // save our user to the database
            newUser.save(function(err) {
              if (err) throw err;
              return done(null, newUser);
            });
          }
        });
      }
    )
  );
};

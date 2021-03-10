const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(
  new LocalStrategy((username, password, done) => {
    db.User.findOne(
      {
        where: {
          username: username,
        },
      },
      (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      }
    );
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  User.findOne({ id: id }, (err, user) => {
    const userInfo = {
      username: user.username,
    };
    cb(err, userInfo);
  });
});

module.exports = passport;

//credit to: Nathaniel Woodbury
//youtube: https://www.youtube.com/watch?v=IUw_TgRhTBE
//https://github.com/woodburydev/passport-local-video/blob/master/backend/passportConfig.js

// IMPORTS ----------------------------------
const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// setup options for jwt strategy, tell where to find token
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

// create jwt strategy, payload = token
const jwtLogin = new JwtStrategy(jwtOptions, async function (payload, done) {
  // callback sees if user id in payload exists => call done with the user object
  // otherwise => call done without a user object
  try {
    let user = User.findById(payload.sub);
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (err) {
    console.log(err);
    return done(err, false);
  }
});

// tell passport to use jwt strategy
passport.use(jwtLogin);

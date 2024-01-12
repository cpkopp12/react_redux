// IMPORTS --------------------------------------
const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

// JWT setup --------------------------------------
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

// CONTROLLER FUNCS ----------------------------------
exports.signup = async function (req, res, next) {
  // check for existing user
  const email = req.body.email;
  const password = req.body.password;

  try {
    let user = await User.findOne({ email: email });

    // if exists, return err
    if (user) {
      return res.status(422).send({ error: 'email is in use' });
    }

    // if a user does not exist, create user
    const newUser = new User({
      email: email,
      password: password,
    });

    if (!email || !password) {
      return res.status(422).send({ error: 'provide email and password' });
    }

    // save and return success
    try {
      newUser.save();
      res.json({ token: tokenForUser(newUser) });
    } catch (error) {
      return next(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

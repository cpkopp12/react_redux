const User = require('../models/user');

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

    // save and return success
    try {
      newUser.save();
      res.json({ success: true });
    } catch (error) {
      return next(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

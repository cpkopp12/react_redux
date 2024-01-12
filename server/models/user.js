// IMPORTS ---------------------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// define model -----------------------
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
});

// on save hook => encrypt password
userSchema.pre('save', function (next) {
  const user = this;

  //set up bcrypt properties ---
  // gen salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    // encrypt user.password using salt and set equal to hash
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

// create model class -------------------------
const ModelClass = mongoose.model('user', userSchema);

// Export ----------------------------------
module.exports = ModelClass;

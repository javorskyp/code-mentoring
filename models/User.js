const mongoose = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
    trim: true
  },
  email: {
    type: String,
    // unique: true,
    // required: true,
    lowercase: true,
    trim: true,
    validate(val) {
      if (!isEmail(val)) throw new Error('Email is invalid');
    }
  },
  password: {
    type: String,
    // required: true,
    trim: true,
    minlength: 7
  },
  avatar: {
    type: Buffer
  },
  contentType: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    photo: String,
    name: String
  },
  github: {
    id: String,
    token: String,
    email: String,
    name: String,
    profileUrl: String,
    photo: String
  }
});
const User = mongoose.model('user', UserSchema);
module.exports = User;

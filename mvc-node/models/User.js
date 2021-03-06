'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  username: String,
  password: String,
});

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true,
  },
  toWatchList: {
    type: Array,
  },
  watchedList: {
    type: Array,
  },
});

const User = mongoose.model('User', userSchema)

module.exports = User;
const mongoose = require('mongoose');

const listerSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true,
  },
  toWatchList: {
    type: Array,
  },
  watchedList: {
    type: Array,
    // default: undefined,
  },
});

const Lister = mongoose.model('Lister', listerSchema)

module.exports = Lister;
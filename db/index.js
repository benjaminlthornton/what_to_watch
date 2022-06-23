const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/watchlist';

const db = mongoose.connect('mongodb://127.0.0.1:27017/watchlist',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB Connected!`);
  })
  .catch((err) => {
    console.log(`MongoDB ERR ${err}`);
  });

module.exports = db;
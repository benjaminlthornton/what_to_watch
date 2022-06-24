const Lister = require('../../db/models/User')

exports.getToWatch = (req, callback) => {
  return (Lister.findOne({userId: 1}, callback))

};

exports.addWatched = (req, callback) => {
  console.log('inside addWatched', req)
  return (Lister.findOneAndUpdate({
    userId: req.userId
  },
  {
    toWatchList: [...req.toWatchList],
    watchedList: [...req.watchedList],
  }, {
    upsert: true,
    useFindAndModify: true,
    new: true,
  }, callback))
};
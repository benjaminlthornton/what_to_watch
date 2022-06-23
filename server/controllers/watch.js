const Lister = require('../../db/models/User')

exports.getToWatch = (req, callback) => {
  console.log('inside getToWatch', req)
  return (Lister.findOne({userId: 1}, callback))

};

// exports.getWatched = (req, res) => {
//   User.findById(req.user)
//   .then((data) => {
//     res.send(data);
//   })
//   .catch((err) => {
//     console.log(err);
//     res.sendStatus(404);
//   })
// };

// exports.addToWatch = ({user, toWatchList}) => {
//   User.findOneAndUpdate({
//     user,
//   },
//   {
//     user,
//     toWatchList,
//   }, {
//     upsert: true,
//     useFindAndModify: false,
//     new: true,
//   });
// };

exports.addWatched = (req, callback) => {
  console.log('inside addWatched', req)
  return (Lister.findOneAndUpdate({
    userId: req.userId
  },
  {
    toWatchList: req.toWatchList,
    watchedList: req.watchedList,
  }, {
    upsert: true,
    useFindAndModify: true,
    new: true,
  }, callback))
};
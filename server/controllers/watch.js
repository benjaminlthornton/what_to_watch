const User = require('../../db/models/User')

exports.getToWatch = (req, res) => {
  console.log(req)
  User.find({}), (err, results) => {
    if (err) {
      res.sendStatus(400);
      res.send(JSON.stringify(err));
    } else {
      console.log("gettowatch", results)
      res.send(JSON.stringify(results));
      res.sendStatus(200)
    }
  }

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

exports.addWatched = (req, res) => {
  console.log('inside addWatched', req)
  User.findOneAndUpdate({
    userId: req.userId
  },
  {
    userId: req.userId,
    toWatchList: req.toWatchList,
    watchedList: req.watchedList,
  }, {
    upsert: true,
    useFindAndModify: false,
    new: true,
  })
//     (err, results) => {
  //   if (err) {
  //     res.send(JSON.stringify(err))
  //     res.sendstatus(400)
  //   } else {
  //     res.send(JSON.stringify(results))
  //   }
  // });
};
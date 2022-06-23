const User = require('../../db/models/User')

exports.getToWatch = (req, res) => {
  User.find({})
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(404);
  })
};

exports.getWatched = (req, res) => {
  User.find({})
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(404);
  })
};

exports.addToWatch = ({user, toWatch}) => {
  User.findOneAndUpdate({
    user,
  },
  {
    user,
    toWatch,
  }, {
    upsert: true,
    useFindAndModify: false,
    new: true,
  });
};

exports.addWatched = ({user, toWatch, watched}) => {
  User.findOneAndUpdate({
    user,
  },
  {
    user,
    toWatch,
    watched,
  }, {
    upsert: true,
    useFindAndModify: false,
    new: true,
  });
};
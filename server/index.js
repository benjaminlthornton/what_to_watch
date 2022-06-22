require('dotenv').config();
const axios = require('axios');
// const { v4: uuidv4 } = require('uuid');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

// Request variables
const PORT = process.env.PORT || 3000;


// Cookie parser middleware (Practice Apps: Part2 reuse)
// session_id cookie is now accessible in every route -> req.session_id
// app.use((req, res, next) => {
//   const cookieString = req.get('Cookie') || '';

//   const parsedCookies = cookieString.split('; ').reduce((cookies, cookie) => {
//     if (cookie.length) {
//       const index = cookie.indexOf('=');
//       const key = cookie.slice(0, index);
//       const token = cookie.slice(index + 1);
//       // eslint-disable-next-line no-param-reassign
//       cookies[key] = token;
//     }
//     return cookies;
//   }, {});

//   if (parsedCookies.s_id) {
//     req.session_id = parsedCookies.s_id;
//   } else {
//     req.session_id = uuidv4();
//     res.cookie('s_id', req.session_id);
//   }

//   next();
// });

// app.get('/watched', (req, res) => {
//   db.getUserWatched(req.query.user)
//   .then((anime) => {
//     res.send(anime.data);
//   })
//   .catch((err) => {
//     console.log('Error getting anime:', err.response.status);
//     res.sendStatus(err.response.status);
//   })
// })

// app.get('/towatch', (req, res) => {
//   db.getUserToWatch(req.query.user)
//   .then((anime) => {
//     res.send(anime.data);
//   })
//   .catch((err) => {
//     console.log('Error getting anime:', err.response.status);
//     res.sendStatus(err.response.status);
//   })
// })

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
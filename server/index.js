const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const express = require('express');
const path = require('path');
const config = require('../config');

const app = express();
// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// Request variables
const port = process.env.PORT || 3000;
const apiUrl = '';
const headers = {
  headers: {
    Authorization: config.TOKEN,
  },
};

// Cookie parser middleware (Practice Apps: Part2 reuse)
// session_id cookie is now accessible in every route -> req.session_id
app.use((req, res, next) => {
  const cookieString = req.get('Cookie') || '';

  const parsedCookies = cookieString.split('; ').reduce((cookies, cookie) => {
    if (cookie.length) {
      const index = cookie.indexOf('=');
      const key = cookie.slice(0, index);
      const token = cookie.slice(index + 1);
      // eslint-disable-next-line no-param-reassign
      cookies[key] = token;
    }
    return cookies;
  }, {});

  if (parsedCookies.s_id) {
    req.session_id = parsedCookies.s_id;
  } else {
    req.session_id = uuidv4();
    res.cookie('s_id', req.session_id);
  }

  next();
});

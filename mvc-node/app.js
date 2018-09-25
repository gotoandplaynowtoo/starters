'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const config = require('./config');
const routes = require('./routes');

const main = (args = {}) => {
  const port = process.env.HTTP_PORT || 9002;
  const app = express();

  app.set('views', config.viewDir);

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(routes);
  
  const server = app.listen(port, () => {
    console.log(`[app.js] Application is running. Listening to port ${port}`);
  });
};

module.exports = main;
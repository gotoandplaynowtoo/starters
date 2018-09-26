'use strict';

'use strict';

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const config = require('./config');
const routes = require('./routes');
const database = require('./database');
const app = require('./app');

const main = (args = {}) => {
  const port = process.env.HTTP_PORT || 9002;
  const exp = express();

  database();

  exp.set('views', config.viewDir);

  exp.use(express.json());
  exp.use(express.urlencoded({ extended: false }));
  exp.use(cookieParser());
  exp.use(express.static(path.join(__dirname, 'public')));
  exp.use(routes);
  
  const server = exp.listen(port, () => {
    console.log(`[bootstrap.js] Application bootstrapping finished. Listening to port ${port}`);
    app({ server, exp, port });
  });
};

module.exports = main;
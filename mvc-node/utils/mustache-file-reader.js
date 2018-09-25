'use strict';

const fs = require('fs');
const config = require('../config');

module.exports = (view, cb) => {
  fs.readFile(`${config.viewDir}/${view}.mustache`, 'utf8', (err, data) => {
    cb(err, data);
  });
};


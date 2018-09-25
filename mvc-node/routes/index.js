'use strict';

const express = require('express');
const createErrors = require('http-errors');
const mustache = require('mustache');
const api = require('./apis');
const mustacheFileReader = require('../utils/mustache-file-reader');
const router = express.Router();

router.use('/api', api);
router.use((req, res, next) => {
  next(createErrors(404));
});

router.use((err, req, res, next) => {
  const stack = err.stack;
  mustacheFileReader('error', (err, data) => {
    if(err) throw err;
    res.send(mustache.render(data, { title: 'Error', stack }));
  });
});

module.exports = router;

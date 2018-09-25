'use strict';

const express = require('express');
const testController = require('../../../controllers/apis/test');
const router = express.Router();

router.use('/test', testController);

module.exports = router;
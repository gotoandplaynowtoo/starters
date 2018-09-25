'use strict';

const express = require('express');
const testService = require('../../../services/test');
const router = express.Router();

router.get('/', testService.getAll);

module.exports = router;
'use strict';

const dotenv = require('dotenv');
const app = require('./app');
const database = require('./database');

dotenv.config();
database();
app({});


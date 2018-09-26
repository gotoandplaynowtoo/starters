'use strict';

const mongoose = require('mongoose');

module.exports = () => {
  const dbConnection = process.env.DB_CONNECTION;
  const dbHost = process.env.DB_HOST;
  const dbDatabase = process.env.DB_DATABASE;
  const connection = `${dbConnection}://${dbHost}/${dbDatabase}`;

  if(!dbConnection || !dbHost || !dbDatabase) {
    console.log('[database.js] Database connection not found.');
    console.log('[database.js] To use the database, please add the following to .env file: ');
    console.log('[database.js] DB_CONNECTION=mongodb');
    console.log('[database.js] DB_HOST=<ip connection>');
    console.log('[database.js] DB_DATABASE=<database name>');
    return;
  }

  mongoose.Promise = global.Promise;
  mongoose.connect(connection, { useNewUrlParser: true })
    .then(() => {
      console.log('[database.js] Database connection success.');
    })
    .catch((err) => {
      throw err;
    });
};
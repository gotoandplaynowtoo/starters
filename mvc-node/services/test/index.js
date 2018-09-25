'use strict';

const data = [
  {id: 1, name: 'John Doe'},
  {id: 2, name: 'Jane Doe'},
];

const getAll = (req, res) => {
  res.json(data);
};

module.exports = {
  getAll,
};
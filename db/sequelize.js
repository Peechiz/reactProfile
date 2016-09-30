const Sequelize = require('sequelize');

if (process.env.DATABASE_URL) {
  const sequelize = new Sequelize(process.env.DATABASE_URL);
  module.exports = sequelize
}

let config;
let db;

if (process.env.DB_CONFIG){  // if testing
  config = process.env.DB_CONFIG; // 'test'
  db = 'postgres://localhost/sandbox_test'
} else {
  config = 'development';
  db = 'postgres://localhost/sandbox'
}

const options = require('../config/config.json')[config]
const sequelize = new Sequelize(db, {logging: false});

module.exports = sequelize;

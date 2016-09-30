const Sequelize = require('sequelize');
const db = process.env.DATABASE_URL || 'postgres://localhost/sandbox';
const sequelize = new Sequelize(db);
module.exports = sequelize;

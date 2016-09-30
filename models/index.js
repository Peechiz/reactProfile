const db = require('../db/sequelize');

console.log('loading models...');

var models = {
  User: db.import(__dirname + '/' + 'user')
}

module.exports = models;
module.exports.db = db;

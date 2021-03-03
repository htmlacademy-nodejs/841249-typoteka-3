'use strict';

require(`dotenv`).config();
const Sequelize = require(`sequelize`);

const {DB_NAME, DB_USER_NAME, DB_USER_PASSWORD, DB_HOST, DB_PORT} = process.env;

module.exports = new Sequelize(DB_NAME, DB_USER_NAME, DB_USER_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: `postgres`,
  pool: {
    max: 5,
    min: 0,
    acquire: 10000,
    idle: 10000
  }
});

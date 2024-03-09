const Sequelize = require('sequelize');
const dotenv = require('dotenv')

dotenv.config();

const connection = new Sequelize(process.env.DATA_BASE, process.env.USER,process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    timezone: '-03:00',

});

module.exports = connection;

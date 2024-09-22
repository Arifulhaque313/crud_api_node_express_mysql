const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('laravel', 'root', 'password',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
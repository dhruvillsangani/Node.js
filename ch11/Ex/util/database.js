const Sequelize = require('sequelize');

const sequelize = new Sequelize('Ex11','root','welcome123', {
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;




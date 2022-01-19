const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const department = sequelize.define('department', {
  id: {
    type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  },
  name:Sequelize.STRING,
  place:Sequelize.STRING,
})



module.exports =department;

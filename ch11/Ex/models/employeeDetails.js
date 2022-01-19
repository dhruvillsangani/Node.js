const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Employee = sequelize.define('Employee', {
  id: {
    type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  },
  firstname:Sequelize.STRING,
  lastname:Sequelize.STRING,
  departmentid: {
    type: Sequelize.INTEGER,
    references: {
     model: 'departments',
     key: 'id'
}
   
  }
})

// references:s {
//   model: 'departments',
//   key: 'id'
// }
module.exports = Employee;

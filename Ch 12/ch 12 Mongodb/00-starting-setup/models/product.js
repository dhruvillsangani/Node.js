const getdb = require('../util/database').getDb;

class Product {
  constructor(title,price,description,imageurl) {
    this.title = title,
    this.price = price,
    this.description = description,
    this.imageurl = imageurl
  }

  save() {
  const db = getdb();
  return db.collection('product')
  .insertOne(this)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err)
  })
  }

}



// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

module.exports = Product;

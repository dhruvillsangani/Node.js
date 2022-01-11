const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  let products = adminData.products;
res.render('shop',{prods:products})
});

// router.delete('/', (req, res, next) => {
//   let products = [];
//   res.send('<button type="button">Button</button>')
// res.render('shop',{prods:products})
// });
//  click = ()=> {
//      console.log("helo");
// }

module.exports = router;

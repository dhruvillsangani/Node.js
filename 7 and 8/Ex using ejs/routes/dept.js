// const path = require('path');

// const express = require('express');

// // const rootDir = require('../util/path');
// // const adminData = require('./empl');

// const router = express.Router();
// const  shopController = require('../controllers/emp')

// const data = require('../data/employee.json')

// const Employees = require('../models/employeeDetails')



// router.get('/', (req, res, next) => {
//   console.log(data);
//   Employees.fetchAll();
//  res.render('shop',{prods:data})
//  });

// module.exports = router;


const path = require('path');

const express = require('express');

const departmentController = require('../controllers/department');

const router = express.Router();

router.get('/add-department', departmentController.getDepartment);

module.exports = router;
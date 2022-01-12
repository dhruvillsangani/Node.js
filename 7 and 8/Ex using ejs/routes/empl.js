const path = require('path');
const express = require('express');
const router = express.Router();
const data = require('../data/employee.json')
const empController = require('../controllers/emp')
const Employees = require('../models/employeeDetails')

router.get('/add-emp',empController.getAddEmp);


router.post('/add/add-emp', empController.postAddEmp);

router.get('/',empController.showEmp);

exports.routes = router;


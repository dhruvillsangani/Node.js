
const path = require('path');

const express = require('express');

const departmentController = require('../controllers/department');

const router = express.Router();

router.get('/add-department', departmentController.getDepartment);

router.post('/add/add-dep', departmentController.postDepartment);

router.get('/add',departmentController.showdepartment);

exports.routes = router;
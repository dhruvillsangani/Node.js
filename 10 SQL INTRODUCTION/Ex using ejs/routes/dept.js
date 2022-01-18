
const path = require('path');

const express = require('express');

const departmentController = require('../controllers/department');

const router = express.Router();

router.get('/add-department', departmentController.getDepartment);

router.post('/add/add-dep', departmentController.postDepartment);

router.post('/delete/:id',departmentController.deleteDept)
// router.post('/delete/dept',departmentController.deleteDept)


router.get('/add',departmentController.showdepartment);

exports.routes = router;
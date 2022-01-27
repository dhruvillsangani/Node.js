
const path = require('path');
const express = require('express');
const studentController = require('../controllers/student');
const router = express.Router();

router.get('/add-student', studentController.getStudents);

router.post('/add/add-student', studentController.postStudent);

router.get('/',studentController.showstudent)
// router.post('/delete/del',departmentController.deleteDept)
// // router.post('/delete/dept',departmentController.deleteDept)


router.get('/student/:id',studentController.showStudentDetails)
router.get('/edit/:id',studentController.EditStudentDetails)
router.post('/edit',studentController.postEditStudentDetails)
router.post('/delete',studentController.deleteStudent);
//  router.get('/add',departmentController.showdepartment);
router.get('/marks/:id',studentController.postmarks);

router.get('/certificate/:id',studentController.postcertificate);
exports.routes = router;
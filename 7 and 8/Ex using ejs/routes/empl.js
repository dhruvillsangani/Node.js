const express = require('express');
const router = express.Router();
const empController = require('../controllers/emp')

router.get('/add-emp',empController.getAddEmp);

router.post('/add/add-emp', empController.postAddEmp);



// router.get('/',(req,res,next)=>{
//     res.redirect('/index.html')
// })

router.get('/emp/:employeeIndex',empController.showEmpDetails)

router.get('/edit/:employeeIndex',empController.editEmpDetails)

router.post('/delete',empController.deleteEmp)

router.post('/edit',empController.postEditEmp)
router.get('/',empController.showEmp);



exports.routes = router;


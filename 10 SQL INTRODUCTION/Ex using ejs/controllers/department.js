
const department = require('../models/departmentDetails')
const deptdata = require('../data/department.json')

exports.getDepartment = (req,res,next) => {
    res.render('department')
}

exports.postDepartment = (req,res,next) => {
    const  departmentes = new department(req.body.department,req.body.dpId);
    departmentes.save();
    res.redirect('/add');
}

exports.showdepartment = (req,res,next) => {
    // console.log("This ...."+deptdata);
    department.fetchAll(depts => {
        res.render('dept-details',{prods:depts})
    });
    // res.render('dept-details',{prods:deptdata})
}




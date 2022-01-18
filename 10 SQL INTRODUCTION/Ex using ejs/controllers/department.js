
const department = require('../models/departmentDetails')
const deptdata = require('../data/department.json')

exports.getDepartment = (req,res,next) => {
    res.render('department')
}

exports.postDepartment = (req,res,next) => {
    const  departmentes = new department(req.body.name,req.body.location);
    departmentes.save()
    .then(() => {
        res.redirect('/add');
      })
      .catch(err => console.log(err));

}

exports.showdepartment = (req,res,next) => {
 
    department.fetchAll()
    .then(([depts]) => {
        res.render('dept-details',{prods:depts})
      })
      .catch(err => console.log(err));
    
    
}

exports.deleteDept = (req,res,next) => {
console.log("req.params.id"+req.params.id);
    department.deleteById(req.params.id)
    .then( (result) => {
        console.log("result : "+result);
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    })

}




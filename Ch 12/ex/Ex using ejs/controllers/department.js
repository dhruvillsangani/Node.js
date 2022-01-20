
const department = require('../models/departmentDetails')
const deptdata = require('../data/department.json')

exports.getDepartment = (req,res,next) => {
    res.render('department')
}

exports.postDepartment = (req,res,next) => {
    const  departmentes = new department(req.body.name,req.body.location);
    
    departmentes.save()
    .then((result) => {
        console.log(result);
        res.redirect('/add');
      })
      .catch(err => console.log(err));

}

exports.showdepartment = (req,res,next) => {
 
    department.fetchAll()
    .then((result) => {
        res.render('dept-details',{prods:result})
      })
      .catch(err => console.log(err));
    
    
}

exports.deleteDept = (req,res,next) => {


   const deletes = new department(req.body.id)
    deletes.deleteById(req.body.id)
       
        res.redirect('/');

    // console.log("id ="+req.body.id);
    // deletes.deleteById(req.body.id)
    // res.redirect('/');

}




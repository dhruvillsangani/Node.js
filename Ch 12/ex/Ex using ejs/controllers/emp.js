 var  uniqueid  = null;
const Employees = require('../models/employeeDetails')
const data = require('../data/employee.json')

  exports.getAddEmp = (req, res, next) => {
    res.render('add-emp')
  }

  exports.postAddEmp = (req, res, next) => {
    const  Employee = new Employees(req.body.firstname,req.body.lastname,req.body.departmentid);
    Employee.save().then(()=> {
      res.redirect('/');
    })
    .catch(err => console.log(err));
   
  }

  exports.showEmp = (req, res, next) => {
    Employees.fetchAll()
    .then((result) => {
      // console.log(rows);
      res.render('empDetials',{prods:result})
    })
    .catch(err => console.log(err));
    
   }

  exports.showEmpDetails = (req, res, next) => {
    let id = req.params.id;
   
    Employees.fetchById(id)
    .then((result) => {
      res.render('emp-detail',{emp:result})
    })
    .catch(err => console.log("err : "+err));
   
    
  }

  exports.editEmpDetails = (req,res,next) => {
    let id = req.params.id;
 
    Employees.fetchById(id)
    .then((result) => {
      res.render('emp-edit',{emp:result})
    })
    .catch(err => console.log("err : "+err));
     
   

    
  }

  exports.postEditEmp = (req,res,next) => {
   
    // console.log("req.body.index"+ uniqueid);
    const updatedetails = new Employees( req.body.id,req.body.firstname,req.body.lastname,req.body.departmentid)
    updatedetails.edit(req.body.id,req.body.firstname,req.body.lastname,req.body.departmentid)
    .then(([rows]) => {
      res.redirect('/');
    })
    .catch(err => console.log("err : "+err));
   
  }

  exports.deleteEmp = (req,res,next) => {
    const deletedetails = new Employees(req.body.index)
    console.log(req.body.departmentid);
    deletedetails.deleteById(req.body.departmentid);
    res.redirect('/');
  }




 var  uniqueid  = null;
const Employees = require('../models/employeeDetails')
const data = require('../data/employee.json')

  exports.getAddEmp = (req, res, next) => {
    res.render('add-emp')
  }

  exports.postAddEmp = (req, res, next) => {
    const  Employee = new Employees(null,req.body.name,req.body.id,req.body.department);
    Employee.save();
    res.redirect('/');
  }

  exports.showEmp = (req, res, next) => {
    // console.log(data);
    Employees.fetchAll(emps => {
      
      res.render('empDetials',{prods:emps})
    });
    
   
   }

  exports.showEmpDetails = (req, res, next) => {
    let id = req.params.employeeIndex;
   
    Employees.fetchById(id,empsdetails => {
     res.render('emp-detail',{emp:empsdetails})
    })
  }

  exports.editEmpDetails = (req,res,next) => {
    let id = req.params.employeeIndex;
    uniqueid = id
    Employees.fetchById(id,empsdetails => {
     res.render('emp-edit',{emp:empsdetails})
    })
  }

  exports.postEditEmp = (req,res,next) => {
   
    console.log("req.body.index"+ uniqueid);
    const updatedetails = new Employees( uniqueid,req.body.name,req.body.id,req.body.department)
    updatedetails.save();
    res.redirect('/');
  }

  exports.deleteEmp = (req,res,next) => {
    const deletedetails = new Employees(req.body.index)
    deletedetails.deleteById(req.body.index);
    // const updatedetails = new Employees( uniqueid,req.body.name,req.body.id,req.body.department)

    // updatedetails.deleteById();
    res.redirect('/');


  }




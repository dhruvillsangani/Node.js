
// const products = [];
const Employees = require('../models/employeeDetails')
const data = require('../data/employee.json')

  exports.getAddEmp = (req, res, next) => {
    res.render('add-emp')
  }

  exports.postAddEmp = (req, res, next) => {
    var index = Math.floor(Math.random() * 1000).toString();
    const  Employee = new Employees(index,req.body.name,req.body.id,req.body.department);
    Employee.save();

    res.redirect('/');
    
  }

  exports.showEmp = (req, res, next) => {
    console.log(data);
    Employees.fetchAll();
    res.render('empDetials',{prods:data})
   
   }





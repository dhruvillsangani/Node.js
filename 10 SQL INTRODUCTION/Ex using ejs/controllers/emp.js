 var  uniqueid  = null;
const Employees = require('../models/employeeDetails')
const data = require('../data/employee.json')

  exports.getAddEmp = (req, res, next) => {
    res.render('add-emp')
  }

  exports.postAddEmp = (req, res, next) => {
    const  Employee = new Employees(null,req.body.name,req.body.id,req.body.department);
    Employee.save().then(()=> {
      res.redirect('/');
    })
    .catch(err => console.log(err));
   
  }

  exports.showEmp = (req, res, next) => {
    // console.log(data);
    Employees.fetchAll()
    .then(([rows]) => {
      console.log(rows);
      res.render('empDetials',{prods:rows})
    })
    .catch(err => console.log(err));
    

   
   }

  exports.showEmpDetails = (req, res, next) => {
    let id = req.params.id;
   
    Employees.fetchById(id)
    .then(([rows]) => {
      res.render('emp-detail',{emp:rows[0]})
    })
    .catch(err => console.log("err : "+err));
   
    
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




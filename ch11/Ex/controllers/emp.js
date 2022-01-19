 var  uniqueid  = null;
const Employees = require('../models/employeeDetails')
const data = require('../data/employee.json')

  exports.getAddEmp = (req, res, next) => {
    res.render('add-emp')
  }

  exports.postAddEmp = (req, res, next) => {
       
    Employees.create({
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      departmentid:req.body.departmentid
    })
    .then(()=> {
        res.redirect('/');
      })
      .catch(err => console.log(err))
   
  }

  exports.showEmp = (req, res, next) => {
    Employees.findAll()
    .then((result) => {
     
      res.render('empDetials',{prods:result})
    })
    .catch(err => console.log(err));
    
   }

  exports.showEmpDetails = (req, res, next) => {
    let id = req.params.id;
   
    Employees.findByPk(id)
    .then((result) => {
      res.render('emp-detail',{emp:result})
    })
    .catch(err => console.log("err : "+err));
   
    
  }

  exports.editEmpDetails = (req,res,next) => {
    let id = req.params.id;
    uniqueid = id
    Employees.findByPk(id)
    .then((result) => {
      res.render('emp-edit',{emp:result})
    })
    .catch(err => console.log("err : "+err));
     
   

    
  }

  exports.postEditEmp = (req,res,next) => {
   
    // console.log("req.body.index"+ uniqueid);
    // const updatedetails = new Employees( req.body.id,req.body.firstname,req.body.lastname,req.body.departmentid)
    // updatedetails.edit(req.body.id,req.body.firstname,req.body.lastname,req.body.departmentid)
    // .then(([rows]) => {
    //   res.redirect('/');
    // })
    // .catch(err => console.log("err : "+err));

    Employees.findByPk(req.body.id)
    .then((Employees)=> {
      Employees.firstname  = req.body.firstname,
      Employees.lastname   = req.body.lastname,
      Employees.departmentid = req.body.departmentid
      return Employees.save()
    })
    .then(result => {
      console.log("Updated");
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
     
    })
   
  }

  exports.deleteEmp = (req,res,next) => {
  
    Employees.findByPk(req.body.id)
      .then(Employees => {
        return Employees.destroy();
      })
      .then(result => {
        console.log('DESTROYED PRODUCT');
        res.redirect('/');
      })
      .catch(err => console.log(err));
  }




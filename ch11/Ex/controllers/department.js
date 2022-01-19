
const department = require('../models/departmentDetails')


exports.getDepartment = (req,res,next) => {
    res.render('department')
}

exports.postDepartment = (req,res,next) => {
    // const  departmentes = new department(req.body.name,req.body.location);
    
    department.create({
        name: req.body.name,
        place:req.body.location
    })
    .then(result => {
        console.log(result);
        res.redirect('/add');
    })
    .catch(err => {
        console.log(err);
    })
    // departmentes.save()
    // .then(() => {
    //     res.redirect('/add');
    //   })
    //   .catch(err => console.log(err));

}

exports.showdepartment = (req,res,next) => {
 department.findAll()
  .then((result) => {
    res.render('dept-details',{prods:result})
  })
  .catch(err => console.log(err));
   
    
    
}

exports.deleteDept = (req,res,next) => {


//    const deletes = new department(req.body.id)
//     deletes.deleteById(req.body.id)
       
//         res.redirect('/add');

//     // console.log("id ="+req.body.id);
//     // deletes.deleteById(req.body.id)
//     // res.redirect('/');
      department.findByPk(req.body.id)
      .then(department => {
        return department.destroy();
      })
      .then(result => {
        console.log('DESTROYED PRODUCT');
        res.redirect('/add');
      })
      .catch(err => console.log(err));

}




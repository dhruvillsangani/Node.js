
const Student = require('../models/student_details')
const certificate = require('../models/certificate')

exports.getStudents = (req,res,next) => {
    certificate.fetchAll()
    .then((result) => {
        console.log(result);
        res.render('addStudent',{prods:result})
      })
      .catch(err => console.log(err));
    
}

exports.postStudent= (req,res,next) => {
    const students = new Student(req.body.name,req.body.surname,req.body.certificateid);
    
    students.save()
    .then((result) => {
        console.log(result);
        res.redirect('/');
      })
      .catch(err => console.log(err));

}

exports.showstudent = (req,res,next) => {
 
    Student.fetchAll()
    .then((result) => {
        for(let item of result) {
            console.log("fROM HERE =>  "+item.certificateid);
        }
        res.render('showStudents',{prods:result})
      })
      .catch(err => console.log(err));
    
    
}

// exports.deleteDept = (req,res,next) => {


//    const deletes = new department(req.body.id)
//     deletes.deleteById(req.body.id)
       
//         res.redirect('/');

//     // console.log("id ="+req.body.id);
//     // deletes.deleteById(req.body.id)
//     // res.redirect('/');

// }




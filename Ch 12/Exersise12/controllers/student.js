
const Student = require('../models/student_details')
const certificate = require('../models/certificate')
const Marks = require('../models/marks');

exports.getStudents = (req,res,next) => {
    // For add student forms 
    certificate.fetchAll()

    .then((result) => {
        console.log(result);
       
        res.render('addStudent',{prods:result})
      })
      .catch(err => console.log(err));
    
}

exports.postStudent= (req,res,next) => {
    const students = new Student(req.body.id,req.body.name,req.body.surname,req.body.certificateid);
    var english = parseInt(req.body.english);
    var maths = parseInt(req.body.maths);
    var science = parseInt(req.body.science)
    var persentage =(english+maths+science)/3;
    const marks = new Marks(persentage,req.body.english,req.body.maths,req.body.science,req.body.id)
    marks.save()
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
     
        res.render('showStudents',{prods:result})

    }).catch(err => {
        console.log(err);
    })

     
}
           
       
        // res.render('showStudents',{prods:result})
    
exports.showStudentDetails = (req,res,next) => {
    let id = req.params.id;

    Student.fetchById(id)
    .then((result) => {
      res.render('student-detail',{student:result})
    })
    .catch(err => console.log("err : "+err));
}

exports.EditStudentDetails = (req,res,next) =>{
    let id = req.params.id;
 
    Student.fetchById(id)
    .then((result) => {
      res.render('student-edit',{emp:result})
    })
    .catch(err => console.log("err : "+err));
}

exports.postEditStudentDetails = (req,res,next) => {
    const updatedetails = new Student( req.body.id,req.body.name,req.body.surname,req.body.certificateid)
    updatedetails.edit(req.body.id,req.body.name,req.body.surname,req.body.certificateid)
   
      res.redirect('/');
  
  
}

exports.deleteStudent = (req,res,next) => {

   Student.deleteById(req.body.id)
       
        res.redirect('/');

    // console.log("id ="+req.body.id);
    // deletes.deleteById(req.body.id)
    // res.redirect('/');

}





// for learning purpose 
exports.postmarks =  (req,res,next) => { 
    let id = req.params.id;
    

    Marks.findById(id)
    .then((result) => {
         var result1 = result;
        //  res.json(result);
        res.render('studentByMarks',{student:result})
     console.log(result1[0].studentId);
    })
    
    .catch(err => console.log("err : "+err));

}


exports.postcertificate =  (req,res,next) => {
    let id = req.params.id;
    Student.fetchByCertificateId(id)

    .then((result) => {
        console.log(result);
       
        res.json(result)
      })
      .catch(err => console.log(err));

} 
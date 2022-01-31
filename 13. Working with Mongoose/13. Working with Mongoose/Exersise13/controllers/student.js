
const Student = require('../models/student_details')
const certificate = require('../models/certificate')
const Marks = require('../models/marks');

exports.getStudents = (req,res,next) => {
    // For add student forms 
    certificate.find()
    .then((result) => {
        console.log(result);
        res.render('addStudent',{prods:result})
      })
      .catch(err => console.log(err));
    
}

exports.postStudent= (req,res,next) => {
    const students = new Student({
        _id: req.body.id,
        name:req.body.name,
        surname: req.body.surname,
        certificateid: req.body.certificateid
    });
    var english = parseInt(req.body.english);
    var maths = parseInt(req.body.maths);
    var science = parseInt(req.body.science)
    var persentage =(english+maths+science)/3;
    const marks = new Marks({
        subjects: [{
            English: req.body.english,
            Maths:req.body.maths,
            Science:req.body.science
        }],
       studentId:req.body.id
    })
    marks.save()
    students.save()
    .then((result) => {
        console.log(result);
        res.redirect('/');
      })
      .catch(err => console.log(err));

    

}

exports.showstudent = (req,res,next) => {
 
    Student.find()
    .populate('certificateid',"-_id")
    .then((result) => {
     console.log(result);
        res.render('showStudents',{prods:result})

    }).catch(err => {
        console.log(err);
    })

     
}
       
    
exports.showStudentDetails = (req,res,next) => {
    let id = req.params.id;
    Student.findById(id)
    .populate('certificateid',"-_id")
    .then((result) => {
      res.render('student-detail',{student:result})
    })
    .catch(err => console.log("err : "+err));
}

exports.EditStudentDetails = (req,res,next) =>{
    let id = req.params.id;
 
    Student.findById(id)
    .then((result)=> {
        res.render('student-edit',{emp:result})
    })
    .catch(err => console.log("err : "+err));
}

exports.postEditStudentDetails = (req,res,next) => {
    
      Student.updateOne({_id:req.body.id},{
        name:req.body.name,
        surname:req.body.surname,
        description:req.body.description
    })
    .then(result => {
        res.redirect('/');
    })
}

exports.deleteStudent = (req,res,next) => {

       Student.findOneAndDelete({_id: req.body.id }).then(result => {
        console.log(result);
        res.redirect('/');
    })
       Marks.findOneAndDelete({studentId: req.body.id })
       .then(result => {
           console.log(result);
           res.redirect('/');
       })
      

}



exports.getByPersentage = (req, res, next) => {

    let persentage = req.params.persentage;
    Marks.aggregate([
        {$unwind:"$subjects"},
        { $project: {studentId:1 , subjects:1,  total: { $add: [ "$subjects.English", "$subjects.Maths","$subjects.Science" ] } } },
        { $project: {studentId:1 , subjects:1, "percent":{ $divide: [ "$total", 3 ] } }},
       
    ])
     
      .then(marks => {
        // console.log(marks);
        const arr = [];    
            for (i = 0; i < marks.length; i++) {
                console.log(marks[i]);
                if (persentage == parseInt(marks[i].percent)) {
                    arr.push(marks[i]);
                }
               
            }

            res.json(arr);


   
    }) 

}


exports.postcertificate =  (req,res,next) => {
    let id = req.params.id;
    Student.find({certificateid:id})
   

    .then((result) => {
        console.log(result);
       
        res.json(result)
      })
      .catch(err => console.log(err));

} 

exports.getStudentByMarks =  (req,res,next) => {
 let arr = [];
 
 Marks.find().sort({"subjects.Maths":-1}).limit(2)
    .then((result) => {
        console.log(result);
       
        res.json(result)
      })
      .catch(err => console.log(err));

} 
exports.engMarks = (req,res,next) =>{
    Marks.find().sort({"subjects.English":+1}).limit(3)
    .then(result => {
        console.log(result);
        res.json(result)
    })
}
exports.avgMaths =  (req,res,next) => {
   
    // Marks.find().sort({"subjects.English":+1}).limit(3)
        Marks.aggregate([
            {$unwind:"$subjects"},
            {$group : {
                _id:"$name",
                count: { $avg :"$subjects.Maths"}
            }}
        ])

    .then((result) => {
        console.log(result);
       
        res.json(result)
      })
      .catch(err => console.log(err));

}

exports.topThreeStudents =  (req,res,next) => {
   
    // Marks.find().sort({"subjects.English":+1}).limit(3)
        Marks.aggregate([
            {$unwind:"$subjects"},
            { $project: {studentId:1 , subjects:1,  total: { $add: [ "$subjects.English", "$subjects.Maths","$subjects.Science" ] } } }

        ])
        
     .sort({"total":-1}).limit(3)
     
    .then((result) => {
        console.log(result);
       
        res.json(result)
      })
      .catch(err => console.log(err));

}
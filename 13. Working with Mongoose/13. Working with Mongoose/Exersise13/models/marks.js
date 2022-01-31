const moongose = require('mongoose');
const Schema =  moongose.Schema;

const marksSchema = new Schema({

  subjects : [{
    
        English:{
          type:Number,
          required:true
        },
        Maths:{
          type:Number,
          required:true
        },
        Science:{
          type:Number,
          required:true
        },
  }],
  studentId:{
    type: Number,
    ref: 'Student',
    unique:true,
    required: true
  }

})

module.exports = moongose.model('Marks',marksSchema)



// const mongodb = require('mongodb');
// const getDb = require('../util/database').getDb;

// module.exports = class Marks {
//     constructor(subject1,subject2,subject3,studentid) {
       

//         this.subject1 = subject1,
//         this.subject2 = subject2,
//         this.subject3 = subject3,
//         this.studentid = studentid
        
//     }

//     save() {
//         const db = getDb();
//         return db.collection('marks').insertOne({
//            persentage:this.persentage,
//            subjects :[{
//                English:this.subject1,
//                Maths:this.subject2,
//                Science:this.subject3
//            }],
//            studentId:this.studentid

           
//         })
//            .then(result => {
//              console.log(result);
//            })
//            .catch(err => {
//              console.log(err);
//            });
         
//       }


//     static fetchAll() {
//         const db = getDb();
//         return db.collection('marks')
//         .find()
//         .toArray()
//         .then(marks => {
//         console.log(marks);
//         return marks;
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     }
 
//     static findById(id) {
//       console.log("findById(id) = " +id);
//       const db = getDb();
//       return db.collection('marks')
//       .find({studentId: id})
//       .toArray()
//       .then(marks => {
//       console.log("Student = "+marks);
//       return marks;
//     })
//     .catch(err => {
//       console.log(err);
//     });
//     }

   
    
// }
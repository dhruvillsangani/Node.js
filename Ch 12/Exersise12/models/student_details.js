const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

module.exports = class StudentDetails {
    constructor( name,surname,certificateid) {
       
        this.name = name;
        this.surname = surname;
        this.certificateid = certificateid;
     
    }

    edit(id) {
      console.log(this.id);
      const db = getDb();
      return db.collection('students')
      .updateOne({ _id: new mongodb.ObjectId(id)}, { $set: this })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });

  }
    save() {
      const db = getDb();
      return db.collection('students').insertOne(this)
         .then(result => {
           console.log(result);
         })
         .catch(err => {
           console.log(err);
         });
       
    }

    static fetchAll() {
        const db = getDb();
        return db.collection('students')
        .find()
        .toArray()
        .then(students => {
            
        console.log(students);
        return students;
      })
      .catch(err => {
        console.log(err);
      });
    }


 static fetchById(id) {
  const db = getDb();
  return db
    .collection('students')
    .find({ _id: new mongodb.ObjectId(id) })
    .next()
    .then(students => {
      console.log(students);
      return students;
    })
    .catch(err => {
      console.log(err);
    });
 }

 static deleteById(id) {
  const db = getDb();
  return db
    .collection('students')
    .deleteOne({ _id: new mongodb.ObjectId(id) })
    .then(result => {
      console.log('Deleted');
    })
    .catch(err => {
      console.log(err);
    });
}
    
}
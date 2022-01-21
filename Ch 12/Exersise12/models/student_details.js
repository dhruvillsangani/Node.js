const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

module.exports = class StudentDetails {
    constructor( name,surname,certificateid) {
       
        this.name = name;
        this.surname = surname;
        this.certificateid = certificateid;
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

    
}
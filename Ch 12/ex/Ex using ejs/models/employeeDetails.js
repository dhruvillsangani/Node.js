const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

module.exports = class EmployeeDetails {
    constructor( firstname, lastname, departmentid) {
       
        this.firstname = firstname;
        this.lastname = lastname;
        this.departmentid = departmentid;
    }

    edit(id,firstname,lastname,departmentid) {
        return db.execute(
            'UPDATE Employee SET firstname= ?,lastname = ?,departmentid = ?  WHERE id = ?',
            [firstname,lastname,departmentid,id]
          );

    }
   

    save() {
      const db = getDb();
      return db.collection('employees').insertOne(this)
         .then(result => {
           console.log(result);
         })
         .catch(err => {
           console.log(err);
         });
       
    }

    static fetchAll() {
      const db = getDb();
      return db.collection('employees')
      .find()
      .toArray()
      .then(employees => {
        console.log(employees);
        return employees;
      })
      .catch(err => {
        console.log(err);
      });
    }


     deleteById(id) {     
       console.log(id);
             db.execute('DELETE FROM Employee  WHERE  id= ?',[id])
            //   db.execute('DELETE FROM department  WHERE id= ?',[id])
            
    }

    static fetchById(id) {
     
      const db = getDb();
      return db
        .collection('employees')
        .find({ _id: new mongodb.ObjectId(id) })
        .next()
        .then(employees => {
          console.log(employees);
          return employees;
        })
        .catch(err => {
          console.log(err);
        });
    }

    
}
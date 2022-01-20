const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;



module.exports  = class departmentDetails {
    constructor(department,place) {
    
        this.department = department;
        this.place = place;
    }

    save() {
      const db = getDb();
     return db.collection('department').insertOne(this)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
        deleteById(id) {     
      console.log("delete ID"+id);  
      db.execute('DELETE FROM Employee  WHERE  departmentid= ?',[id])
      db.execute('DELETE FROM department  WHERE id= ?',[id])
     }

    static fetchAll() {
      const db = getDb();
      return db.collection('department')
      .find()
      .toArray()
      .then(department => {
        console.log(department);
        return department;
      })
      .catch(err => {
        console.log(err);
      });
     }

   


}
const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

module.exports = class Certificates {
    constructor(name) {
       
        this.name = name;
        
    }


    static fetchAll() {
        const db = getDb();
        return db.collection('certificate')
        .find()
        .toArray()
        .then(certificate => {
        console.log(certificate);
        return certificate;
      })
      .catch(err => {
        console.log(err);
      });
    }
 
    static findById(id) {
      console.log("findById(id) = " +id);
      const db = getDb();
      return db.collection('certificate')
      .find({_id: new mongodb.ObjectId(id)})
      .toArray()
      .then(certificate => {
      console.log(certificate);
      return certificate;
    })
    .catch(err => {
      console.log(err);
    });
    }
    
}
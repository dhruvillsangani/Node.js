const mongodb = require('mongodb');
const getdb = require('../util/database').getDb;
class User  {
  constructor(username,email) {
    this.name =  username,
    this.emial = email
  }

save() {
  const db = getdb();
  db.collection('users').inserOne(this);
}

static findById(userId){
  console.log(userId);
  const db = getdb();
  return db.collection('users').findOne({_id: new mongodb.ObjectId(userId)});


} 
}

module.exports = User;

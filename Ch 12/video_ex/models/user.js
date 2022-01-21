const mongodb = require('mongodb');
const getdb = require('../util/database').getDb;
class User  {
  constructor(username,email,cart,id) {
    this.name =  username,
    this.emial = email,
    this.cart = cart,
    this._id = id

  }

save() {
  const db = getdb();
  db.collection('users').inserOne(this);
}
addToCart(product) {


  const updatedCart = {items: [{...product, quantity:1 }] };
  const db = getdb();
  return db.collection('users')
  .updateOne({_id: new mongodb.ObjectId(_id)}
            ,{$set:{cart:updatedCart}}
            )

}

static findById(userId){
  console.log(userId);
  const db = getdb();
  return db.collection('users').findOne({_id: new mongodb.ObjectId(userId)});


} 
}

module.exports = User;

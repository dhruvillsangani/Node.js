const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose =  require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri:'mongodb+srv://dhruvil:123@cluster0.ldpbz.mongodb.net/studentmanagement1?retryWrites=true&w=majority',
  collection:'sessions'
})
app.set('view engine', 'ejs');
app.set('views' , 'views');


const studentData = require('./routes/studentRoutes');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));

app.use(session({
  secret:'MY SECRET',
  resave:false,
  saveUninitialized:false,
  store:store
 }));


app.use(studentData.routes);
app.use(authRoutes);


mongoose.connect('mongodb+srv://dhruvil:123@cluster0.ldpbz.mongodb.net/studentmanagement1?retryWrites=true&w=majority')
.then(result => {
  console.log("connected");
  app.listen(5000);

}).catch(err => {
  console.log(err);
})

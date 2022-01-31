const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose =  require('mongoose')
app.set('view engine', 'ejs');
app.set('views' , 'views');


const studentData = require('./routes/studentRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));

app.use(studentData.routes);


// mongodb+srv://dhruvil:123@cluster0.ldpbz.mongodb.net/studentmanagement?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://dhruvil:123@cluster0.ldpbz.mongodb.net/studentmanagement1?retryWrites=true&w=majority')
.then(result => {
  console.log("connected");
  app.listen(5500);

}).catch(err => {
  console.log(err);
})

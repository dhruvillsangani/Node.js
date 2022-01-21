const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./util/database');

app.set('view engine', 'ejs');
app.set('views' , 'views');


const studentData = require('./routes/studentRoutes');
const mongoConnect = require('./util/database').mongoConnect;

 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(studentData.routes);



mongoConnect(() => {
    app.listen(5000);
  });
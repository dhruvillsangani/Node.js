const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./util/database');

app.set('view engine', 'ejs');
app.set('views' , 'views');


const adminData = require('./routes/empl');
const departmentRoutes = require('./routes/dept');

 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));



app.use(adminData.routes);
app.use(departmentRoutes.routes);
app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:'Page Not Found'});
});

app.listen(4000);

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views' , 'views');

const sequelize = require('./util/database');

const adminData = require('./routes/empl');
const departmentRoutes = require('./routes/dept');

const Employees = require('./models/employeeDetails');
const department = require('./models/departmentDetails')
 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// var x = path.join("..","..");
// console.log("x = "+x);

app.use(adminData.routes);
app.use(departmentRoutes.routes);
app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:'Page Not Found'});
});

Employees.belongsTo(department, {
    foreignKey: { name: 'departmentid', allowNull: true },
    onDelete: 'CASCADE',
  });


sequelize.sync({force:true})
.then(result => {
    console.log(result);
    app.listen(8000)
})
.catch((err)=>{
    console.log(err);
})


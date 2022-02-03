const express = require('express')
const bodyParser = require('body-parser');
const app = express();

const users = [];

app.set('view engine','ejs');
app.set('views','views')
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res,next) =>{
    res.render('index',{users:users,path: '/'});
    console.log(users);
})

app.get('/login',(req,res,next) =>{
    if(users.length == 0) {
        res.render('login',{path: '/login'})
    }
    else {
        res.redirect('/')
    }
   
})

app.post('/add',(req,res,next) => {
    users.push({username:req.body.username,pwd:req.body.pwd})
    res.redirect('/')
});

app.listen(4000);

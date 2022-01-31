const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();



app.set('view engine','ejs');
app.set('views','views')
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res,next) =>{
    console.log(req.cookies); 
    const obj = JSON.parse(JSON.stringify(req.cookies))
    console.log(obj);
     res.render('index',{users:obj});
 
})

app.get('/login',(req,res,next) =>{
    
        res.render('login')
  
   
})

app.use('/add',(req,res,next) => {
    res.cookie('USERDETAIL',{username:req.body.username,pwd:req.body.pwd},{
        maxAge: 10000,
        secure: true,
        httpOnly: true,
      
    })
   

    res.redirect('/')
});

app.listen(4000);

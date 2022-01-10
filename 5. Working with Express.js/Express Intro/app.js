const http = require('http');
const express = require('express');
const routes = require('./Routes/routes');
const app = express();


app.use(routes);

app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
});



app.listen(1000)
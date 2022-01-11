const http = require('http');
const express = require('express');
const routes = require('./Routes/routes');
const app = express();




app.use((req, res, next) => {
    let validIps = ['127.0.0.1','::1','192.168.43.87']; // Put your IP whitelist in this array
    
      if(validIps.includes(req.ip)){
        
          console.log("Authorize");
          next();
      }
      else
      {
          
          console.log("unauthorize: " + req,ip);
          const err = new Error("unauthorize: " + req.ip);
          next(err);
      }
    })
    app.use(routes);
app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
});



app.listen(1000)
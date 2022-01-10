const express = require('express');
const router = express.Router();
 
let arr = [
    {name:'Dhruvil',id:123,Department:'Computer'}
]

router.use((req, res, next) => {
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
  

router.use('/add',(req,res,next)=> {
    res.send('<html><h1>Hello World</h1></html>');
    
})


router.get('/',(req,res,next)=> {
    res.send('<html><h1>Hello</h1></html>');
  //   console.log("/ executes" );
 
})


module.exports = router;
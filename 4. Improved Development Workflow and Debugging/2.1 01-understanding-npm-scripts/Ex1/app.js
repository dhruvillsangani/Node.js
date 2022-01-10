
const http = require('http');

const server = http.createServer(function(request, response) {
  
    response.writeHead(200, {"Content-Type": "text/plain"});
    setInterval(function() { 
        response.write("Hello-World");
        response.end();
    }, 5000);
    
    
   
request.on('error',function(e){
    console.log("Server is not running error"+e);
})

})
server.listen(8888);



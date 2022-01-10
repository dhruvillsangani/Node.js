const http = require('http');
const fs = require('fs')




    const server = http.createServer((req, res) => {
       
    
        res.setHeader('Content-Type', 'Text/html');
        res.write('<html>');
        res.write('<body><h2>Hello</h2></body>')
        
        // res.write('<body> <form action="/message" method="POST">Username: <input type="text"> Password:<input type="password"><button type="submit">Submit</button></form></body>')
        res.write('</html>');
        res.end();
      
       
    });

        server.listen(3000);
    



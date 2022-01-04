const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
     console.log(req.url,req.method,req.headers,req.socket.localAddress,req.type);
    const url = req.url;
    const method = req.method;
    const ip = req.socket.localAddress;
    console.log(ip);

    if(url === '/') {
      
        res.write('<html>');
        res.write('<body> <form action="/message" method="POST">Username: <input type=text> Password:<input type=password><button type="submit">Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url ==='/message'&& method ==='POST') {
            fs.writeFileSync('message.txt','Dhruvil');
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
    }

    res.setHeader('Content-Type','Text/html');
    res.write('<html>');
    res.write('<body><h2>Hello</h2></body>')
    // res.write('<body> <form action="/message" method="POST">Username: <input type="text"> Password:<input type="password"><button type="submit">Submit</button></form></body>')
    res.write('</html>');
    res.end();
});

server.listen(4000);
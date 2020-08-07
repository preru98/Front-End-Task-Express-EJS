const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port =  3000;

const app = express();
app.use(express.static('public'));

app.use((req, res, next) =>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><head><body><h1>This is Express Server, Prerna :)</h1></body></head></html>');
})

const server = http.createServer(app);
server.listen(port, hostname, ()=>{
    console.log(`Server Running at http://${hostname}:${port}`)
})

// const express = require('express');
// const http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const app = express();

// app.use((req, res, next) => {
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');

// });

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
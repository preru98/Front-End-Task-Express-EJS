const express = require('express');
const http = require('http');
const ejs = require('ejs');

const hostname = 'localhost';
const port =  process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index');
});

// app.use((req, res, next) =>{
//     console.log(req.headers);
//     res.statusCode=200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><head><body><h1>This is Express Server, Have  a good day :)</h1></body></head></html>');
// })

const server = http.createServer(app);
server.listen(port, hostname, ()=>{
    console.log(`Server Running at http://${hostname}:${port}`)
})

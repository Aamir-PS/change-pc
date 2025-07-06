// const { Console } = require('console');
const fs = require('fs');
const http = require('http');

const port = process.env.port || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> this is codewithharry</h1> <p>Hey this is the way to rock the world!</p>')
    }else if(req.url == '/cwh'){
        res.statusCode = 200;
        res.end('<h1>About codeWithHarry</h1> <p>Hey this is the about code with harry!</p>')
    }else{
        // res.harry(); 
        res.statusCode = 404;
        res.end('<h1>About codeWithHarry</h1> <p>Hey this is the about code with harry!</p>')
    }
})

server.listen(port, ()=>{
    console.log('Server is listening on port ${port} ')
});
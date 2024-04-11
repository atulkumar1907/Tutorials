const http = require("http");

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type': 'application\json'});
    res.write(JSON.stringify({name: "Atul Kumar", email:"atulkashyap1907@gmail.com"}));
    res.end();
}).listen(5000)
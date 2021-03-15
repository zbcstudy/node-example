const http = require('http');
const url = require('url');
const fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end('Hello Word\n');
}).listen(8888);

console.log('server running at 127.0.0.1:8888');

http.createServer(function (request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8080);

console.log('server running at 127.0.0.1:8080');
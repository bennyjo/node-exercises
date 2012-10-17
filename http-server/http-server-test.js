var http = require('http');

var server = http.createServer(function(req, res){
    var body = 'Hello World!';
    res.setHeader('Content-Length', body.length);
    res.setHeader('Content-Type', 'text/plain');
    res.end(bo);
});

server.listen(3000, '127.0.0.1');
const http = require('http');

http.createServer(function(req, res) {

    const p = req.url;
    if (p === '/') {
        console.log("hello world");
        console.log(req.url);
        console.log(req.method);
        res.writeHead(200, {'content-type': 'text/html'}); // you can change the content
        res.write('<h1>hello world</h1>');
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<p1>page not found</p1>');
        res.end();
    }
}).listen(5000);

const http = require('http');
const fs = require('fs');

const filePath = 'world.txt';
const rstream = fs.createReadStream(filePath);

//Commented out the first server declaration
const server = http.createServer(function(req, res) {
    rstream.on('data', function(chunk) {
        res.write(chunk);
    });
    rstream.on('end', function() {
        res.end();
    });
    rstream.on('error', function(err) {
        console.error('Error:', err.message);
        res.statusCode = 500; // Internal Server Error
        res.end('File not found');
    });
});

// const server = http.createServer(function(req, res) {
//     rstream.pipe(res);
// });

server.listen(4500, function() {
    console.log('Server is listening on port 4500');
});

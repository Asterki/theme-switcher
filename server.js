const http = require('http');
const fs = require('fs');

const server = http.createServer(async function (req, res) {
    if (req.url == '/') {
    	fs.readFile('./src/index.html', function (err, file) {
        	res.write(file);
        	res.end();
		});
        
    } else {
    	fs.readFile('./src/404.html', function (err, file) {
        	res.end(file);
		});
    }
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..');
const spruce = require('http');

const server = spruce.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('My mind is deteriorating, oh god please help, someone aghhhhhhhhhhhhh\n');
} ).listen(8080);
const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 500;
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('X-Content-Type', 'holi');
	res.end('Hello World');
});

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
import {createServer} from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(500, {'Content-Type': 'text/html'});
    res.end('<h1>Server is running</h1>');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is listening');
});

Arrow functions
function handleRequest() {}
const handleRequest = () => {}
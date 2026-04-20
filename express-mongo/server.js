import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.write('Hello World')
    res.end()
})

server.listen(PORT, () => {
    console.log('Conexão iniciada');
})
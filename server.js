const http = require('http');

const port = 3000;

const routes = {
  '/': 'API Rest com Express e MongoDB',
  '/livros': 'Rota de livros'
}
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
// const http = require('http');
import app from "./src/app.js";

const port = process.env.PORT || 3000;


// const routes = {
//   '/': 'API Rest com Express e MongoDB',
//   '/livros': 'Rota de livros'
// }
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end(routes[req.url]);
// });

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
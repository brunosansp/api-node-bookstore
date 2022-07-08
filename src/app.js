import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão efetuada com sucesso");
})

const app = express();
app.use(express.json());

// let dbBooks = [
//   { id: 1, "title": "O Senhor dos Anéis" },
//   { id: 2, "title": "O Hobbit" }
// ]

app.get('/', (req, res) => {
  return res.status(200).send('Home page');
});

app.get('/books', (req, res) => {
  // return res.status(200).json(dbBooks);
  books.find((err, books) => {
    res.json(books);
  });
});

app.get('/books/:id', (req, res) => {
  const index = searchBookByID(req.params.id);
  return res.json(dbBooks[index]);
})

app.post('/books', (req, res) => {
  dbBooks.push(req.body);
  res.status(201).send('Livro cadastrado com sucesso.');
});

app.put('/books/:id', (req, res) => {
  const index = searchBookByID(req.params.id);
  dbBooks[index].title = req.body.title;
  return res.json(dbBooks);
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = searchBookByID(id);
  // dbBooks.delete[index];
  dbBooks.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso.`);
})

function searchBookByID(id) {
  return dbBooks.findIndex(livro => livro.id == id);
}

export default app;
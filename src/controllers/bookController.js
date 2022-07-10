import books from "../models/Book.js";

class BookCotroller {
  static listBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };

  static createBook = (req, res) => {
    const newBook = new books(req.body);
    newBook.save((err) => {
      if (err) res.status(400).send({ message: err.message });
      else res.status(201).send(newBook.toJSON());
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) res.status(200).send({ message: "Livro atualizado com sucesso" });
      else res.status(400).send({ message: err.message });
    });
  };

  static searchBookById = (req, res) => {
    const id = req.params.id;
    books.findById(id, (err, books) => {
      if (err) res.status(404).send({ message: err.message });
      else res.status(200).json(books);
    });
  };

  static deleteBookById = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id, (err, books) => {
      if (err) res.status(400).send({ message: `Não foi possível encontrar livro com o id ${id} para remover.` });
      else res.status(200).send({ message: `O livro com o id ${id} foi removido com sucesso.` });
    });
  };
};

export default BookCotroller;
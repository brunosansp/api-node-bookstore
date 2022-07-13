import authors from '../models/Author.js';

export default class AuthorController {
  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static createAuthor = (req, res) => {
    const newAuthor = new authors(req.body);
    newAuthor.save((err) => {
      if (err) res.status(400).send({ message: err.message });
      else res.status(201).send(newAuthor.toJSON());
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) res.status(400).send({ message: req.message });
      else res.status(200).send({ message: 'successfully updated' });
    });
  };

  static searchAuthorById = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (err, authors) => {
      if (err) res.status(404).send({ message: err.message });
      else res.status(200).json(authors);
    });
  };

  static deleteAuthorById = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndDelete(id, (err, authors) => {
      if (err) res.status(400).send({ message: err.message });
      else res.status(200).send({ message: `The author of id ${id} was successfully removed` });
    });
  };
}
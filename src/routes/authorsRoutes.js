import express from 'express';
import AuthorsController from '../controllers/authorsController.js';

const router = express.Router();

router
  .get('/authors', AuthorsController.listAuthors)
  .get('/authors/:id', AuthorsController.searchAuthorById)
  .post('/authors', AuthorsController.createAuthor)
  .put('/authors/:id', AuthorsController.updateAuthor)
  .delete('/authors/:id', AuthorsController.deleteAuthorById)

export default router;
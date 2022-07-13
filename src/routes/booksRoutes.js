import express from 'express';
import BooksCotroller from '../controllers/booksController.js';

const router = express.Router();

router
  .get('/books', BooksCotroller.listBooks)
  .get('/books/:id', BooksCotroller.searchBookById)
  .post('/books', BooksCotroller.createBook)
  .put('/books/:id', BooksCotroller.updateBook)
  .delete('/books/:id', BooksCotroller.deleteBookById)

export default router;
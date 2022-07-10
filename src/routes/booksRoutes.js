import express from "express";
import BookCotroller from "../controllers/bookController.js";

const router = express.Router();

router
  .get("/books", BookCotroller.listBooks)
  .get("/books/:id", BookCotroller.searchBookById)
  .post("/books", BookCotroller.createBook)
  .put("/books/:id", BookCotroller.updateBook)
  .delete('/books/:id', BookCotroller.deleteBookById)

export default router;
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  author: { type: String },
  publishingCompany: { type: String },
  numbPages: { type: Number }
});

const books = mongoose.model('books', bookSchema);

export default books;
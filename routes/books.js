const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/", async (req, res) => {
  try {
    const { author, genre, page = 1, limit = 5 } = req.query;

    let query = {};

    if (author) query.author = author;
    if (genre) query.genre = genre;

    const books = await Book.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json(books);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {

    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    res.status(200).json(book);

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

router.post("/", async (req, res) => {

  const { title, author, price } = req.body;

  if (!title || !author || !price) {
    return res.status(400).json({
      message: "Title, Author and Price are required"
    });
  }

  try {

    const book = new Book(req.body);

    const savedBook = await book.save();

    res.status(201).json(savedBook);

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

router.put("/:id", async (req, res) => {

  const { title, author, price } = req.body;

  if (!title || !author || !price) {
    return res.status(400).json({
      message: "Title, Author and Price are required"
    });
  }

  try {

    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    res.status(200).json(book);

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

router.delete("/:id", async (req, res) => {

  try {

    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    res.status(200).json({
      message: "Book deleted successfully"
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

module.exports = router;
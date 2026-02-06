const express = require('express');
const app = express();

app.use(express.json()); // allows JSON request bodies

// Temporary in‑memory data store
let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Clean Code", author: "Robert C. Martin" }
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET a single book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// CREATE a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// UPDATE a book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });

  const { title, author } = req.body;

  book.title = title ?? book.title;
  book.author = author ?? book.author;

  res.json(book);
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  books = books.filter(b => b.id !== id);
  res.json({ message: "Book deleted" });
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Books API running at http://localhost:${PORT}`);
});
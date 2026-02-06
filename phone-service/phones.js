const express = require('express');
const app = express();

app.use(express.json()); // allows JSON request bodies

// In‑memory phone "database"
let phones = [
  { id: 1, brand: "Apple", model: "iPhone 15", price: 999 },
  { id: 2, brand: "Samsung", model: "Galaxy S24", price: 899 }
];

// GET all phones
app.get('/phones', (req, res) => {
  res.json(phones);
});

// GET a single phone by ID
app.get('/phones/:id', (req, res) => {
  const phone = phones.find(p => p.id === Number(req.params.id));
  if (!phone) return res.status(404).json({ message: "Phone not found" });
  res.json(phone);
});

// CREATE a new phone
app.post('/phones', (req, res) => {
  const { brand, model, price } = req.body;

  if (!brand || !model || price == null) {
    return res.status(400).json({ message: "Brand, model, and price are required" });
  }

  const newPhone = {
    id: phones.length + 1,
    brand,
    model,
    price
  };

  phones.push(newPhone);
  res.status(201).json(newPhone);
});

// UPDATE a phone
app.put('/phones/:id', (req, res) => {
  const phone = phones.find(p => p.id === Number(req.params.id));
  if (!phone) return res.status(404).json({ message: "Phone not found" });

  const { brand, model, price } = req.body;

  phone.brand = brand ?? phone.brand;
  phone.model = model ?? phone.model;
  phone.price = price ?? phone.price;

  res.json(phone);
});

// DELETE a phone
app.delete('/phones/:id', (req, res) => {
  const id = Number(req.params.id);
  phones = phones.filter(p => p.id !== id);
  res.json({ message: "Phone deleted" });
});

// Start server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
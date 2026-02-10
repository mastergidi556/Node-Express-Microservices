const express = require('express');
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3004, () => {
  console.log("User Service running on port 3004");
});
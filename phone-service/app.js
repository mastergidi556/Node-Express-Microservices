require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");

const app = express();
app.use(express.json());

// connect to MongoDB
connectDB();

// routes
app.use("/api/phones", require("./src/routes/phoneRoutes"));

module.exports = app;
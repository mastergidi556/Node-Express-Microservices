const User = require("../models/user");

// GET all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();   // Reads from MongoDB
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);  // Reads from MongoDB
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE a new user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);  // Writes to MongoDB
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
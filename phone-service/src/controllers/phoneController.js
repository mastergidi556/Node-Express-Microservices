const Phone = require("../models/phone");

// Create a new phone
exports.createPhone = async (req, res) => {
  try {
    const { brand, model, os } = req.body;

    const phone = await Phone.create({ brand, model, os });

    return res.status(201).json({
      message: "Phone created successfully",
      data: phone,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Get all phones
exports.getPhones = async (req, res) => {
  try {
    const phones = await Phone.find();

    return res.status(200).json({
      count: phones.length,
      data: phones,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get a phone by ID
exports.getPhoneById = async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id);

    if (!phone) {
      return res.status(404).json({ error: "Phone not found" });
    }

    return res.status(200).json({ data: phone });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Update a phone
exports.updatePhone = async (req, res) => {
  try {
    const { brand, model, os } = req.body;

    const phone = await Phone.findByIdAndUpdate(
      req.params.id,
      { brand, model, os },
      { new: true, runValidators: true }
    );

    if (!phone) {
      return res.status(404).json({ error: "Phone not found" });
    }

    return res.status(200).json({
      message: "Phone updated successfully",
      data: phone,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Delete a phone
exports.deletePhone = async (req, res) => {
  try {
    const phone = await Phone.findByIdAndDelete(req.params.id);

    if (!phone) {
      return res.status(404).json({ error: "Phone not found" });
    }

    return res.status(200).json({
      message: "Phone deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
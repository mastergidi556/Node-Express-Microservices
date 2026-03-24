const express = require("express");
const router = express.Router();
const logger = require("../middleware/logger");

const phoneController = require("../controllers/phoneController");

router.use(logger);
// Create a phone
router.post("/", phoneController.createPhone);

// Get all phones
router.get("/", phoneController.getPhones);

// Get a single phone by ID
router.get("/:id", phoneController.getPhoneById);

// Update a phone
router.put("/:id", phoneController.updatePhone);

// Delete a phone
router.delete("/:id", phoneController.deletePhone);

module.exports = router;
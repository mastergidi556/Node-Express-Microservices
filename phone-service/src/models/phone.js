const mongoose = require("mongoose")

const phoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
    },

    model: {
      type: String,
      required: true,
      trim: true,
    },

    os: {
      type: String,
      required: true,
      enum: ["Android", "iOS", "Other"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Phone", phoneSchema);
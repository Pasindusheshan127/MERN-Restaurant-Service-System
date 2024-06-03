const mongoose = require("mongoose");

// Define the schema for the Restaurant model
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  address: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
    match: /^[0-9]+$/, // Ensure telephone contains only numbers
  },
});

// Create the Restaurant model from the schema
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// Export the Restaurant model
module.exports = Restaurant;

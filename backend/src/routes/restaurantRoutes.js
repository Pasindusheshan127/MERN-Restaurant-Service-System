// backend/src/routes/restaurantRoutes.js
const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController");

/*
// Define a validation schema using Joi
const restaurantSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  address: Joi.string().required(),
  telephone: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
});
*/

// Route to create a new restaurant
router.post("/", restaurantController.createRestaurant);

// Route to get details of a restaurant by ID
router.get("/:id", restaurantController.getRestaurantById);

// Route to update a restaurant by ID
router.put("/:id", restaurantController.updateRestaurantById);

// Route to delete a restaurant by ID
router.delete("/:id", restaurantController.deleteRestaurantById);

// Route to list all restaurants
router.get("/", restaurantController.listRestaurants);

// Export the router
module.exports = router;

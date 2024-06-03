// backend/src/routes/restaurantRoutes.js
const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController");

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

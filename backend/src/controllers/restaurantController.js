const Restaurant = require("../models/Restaurant");
const Joi = require("joi");

// Define a validation schema using Joi
const restaurantSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  address: Joi.string().required(),
  telephone: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
});

// Controller to create a new restaurant
exports.createRestaurant = async (req, res, next) => {
  try {
    // Validate the request body against the schema
    const { error } = restaurantSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Create and save the new restaurant
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).send(restaurant);
  } catch (err) {
    next(err);
  }
};

// Controller to get a restaurant by ID
exports.getRestaurantById = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).send("Restaurant not found");
    res.send(restaurant);
  } catch (err) {
    next(err);
  }
};

// Controller to update a restaurant by ID
exports.updateRestaurantById = async (req, res, next) => {
  try {
    // Validate the request body against the schema
    const { error } = restaurantSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Find the restaurant by ID and update it
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!restaurant) return res.status(404).send("Restaurant not found");
    res.send(restaurant);
  } catch (err) {
    next(err);
  }
};

// Controller to delete a restaurant by ID
exports.deleteRestaurantById = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) return res.status(404).send("Restaurant not found");
    res.send({ message: "Restaurant deleted successfully" });
  } catch (err) {
    next(err);
  }
};

// Controller to list all restaurants
exports.listRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.send(restaurants);
  } catch (err) {
    next(err);
  }
};

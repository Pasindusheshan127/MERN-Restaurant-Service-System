import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    telephone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post("http://localhost:9900/api/restaurants", restaurant);
      // Navigate to the restaurant list after successful submission
      navigate("/");
    } catch (error) {
      console.error("There was an error creating the restaurant!", error);
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-md shadow-md">
      <h1 className="mb-6 text-3xl font-bold">Add Restaurant</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
            required
            className="block w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="address" className="text-lg font-semibold">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={restaurant.address}
            onChange={handleChange}
            required
            className="block w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="text-lg font-semibold">
            Telephone
          </label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            value={restaurant.telephone}
            onChange={handleChange}
            required
            className="block w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;

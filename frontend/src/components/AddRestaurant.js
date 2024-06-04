// frontend/src/components/AddRestaurant.js
import React, { useState } from "react";
import { unstable_HistoryRouter } from "react-router-dom";
import axios from "axios";

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    telephone: "",
  });
  const history = unstable_HistoryRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9900/api/restaurants", restaurant)
      .then(() => history.push("/"))
      .catch((error) => console.error("Error adding restaurant:", error));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={restaurant.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Telephone</label>
          <input
            type="text"
            name="telephone"
            value={restaurant.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;

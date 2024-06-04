// frontend/src/components/EditRestaurant.js
import React, { useEffect, useState } from "react";
import { unstable_HistoryRouter, useParams } from "react-router-dom";
import axios from "axios";

const EditRestaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    telephone: "",
  });
  const history = unstable_HistoryRouter();

  useEffect(() => {
    axios
      .get(`/api/restaurants/${id}`)
      .then((response) => setRestaurant(response.data))
      .catch((error) =>
        console.error("Error fetching restaurant details:", error)
      );
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/restaurants/${id}`, restaurant)
      .then(() => history.push("/"))
      .catch((error) => console.error("Error updating restaurant:", error));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Restaurant</h1>
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditRestaurant;

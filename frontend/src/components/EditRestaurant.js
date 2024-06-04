import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditRestaurant = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const navigate = useNavigate(); // useNavigate instead of useHistory

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9900/api/restaurants/${id}`
        );
        const { name, address, telephone } = response.data;
        setName(name);
        setAddress(address);
        setTelephone(telephone);
      } catch (error) {
        console.error("There was an error fetching the restaurant!", error);
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:9900/api/restaurants/${id}`, {
        name,
        address,
        telephone,
      });
      // Navigate to the restaurant list after successful update
      navigate("/");
    } catch (error) {
      console.error("There was an error updating the restaurant!", error);
    }
  };

  return (
    <div>
      <h2>Edit Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="telephone">Telephone:</label>
          <input
            type="tel"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Restaurant</button>
      </form>
    </div>
  );
};

export default EditRestaurant;

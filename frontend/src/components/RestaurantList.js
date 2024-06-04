import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9900/api/restaurants")
      .then((response) => setRestaurants(response.data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Restaurants</h1>
      <Link to={"/add"} className="text-blue-500">
        Add New Restaurant
      </Link>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>
            <Link to={`/restaurants/${restaurant._id}`}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;

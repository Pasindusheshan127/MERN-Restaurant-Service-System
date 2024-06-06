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
    <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-md shadow-md">
      <h1 className="mb-6 text-3xl font-bold">Restaurants</h1>
      <ul className="space-y-2">
        {restaurants.map((restaurant) => (
          <li
            key={restaurant._id}
            className="flex items-center justify-between p-4 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            <Link
              to={`/restaurants/${restaurant._id}`}
              className="text-lg font-semibold text-blue-500 hover:underline"
            >
              {restaurant.name}
            </Link>
            <span className="text-gray-500">{restaurant.address}</span>
          </li>
        ))}
      </ul>
      <Link
        to={"/add"}
        className="block mt-6 text-lg font-bold text-blue-500 hover:underline"
      >
        Add New Restaurant
      </Link>
    </div>
  );
};

export default RestaurantList;

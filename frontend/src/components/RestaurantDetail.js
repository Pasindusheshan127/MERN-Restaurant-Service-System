import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9900/api/restaurants/${id}`)
      .then((response) => setRestaurant(response.data))
      .catch((error) =>
        console.error("Error fetching restaurant details:", error)
      );
  }, [id]);
  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{restaurant.name}</h1>
      <p>{restaurant.address}</p>
      <p>{restaurant.telephone}</p>
      <Link to={`/edit/${restaurant._id}`} className="text-blue-500">
        Edit
      </Link>
      <Link to="/" className="text-blue-500 ml-4">
        Back to List
      </Link>
    </div>
  );
};

export default RestaurantDetail;

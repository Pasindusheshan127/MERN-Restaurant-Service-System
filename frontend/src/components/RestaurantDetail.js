import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:9900/api/restaurants/${id}`)
      .then((response) => setRestaurant(response.data))
      .catch((error) =>
        console.error("Error fetching restaurant details:", error)
      );
  }, [id]);
  if (!restaurant) return <div>Loading...</div>;

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:9900/api/restaurants/${id}`);
      // Navigate to the restaurant list after successful delete
      navigate("/");
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-md shadow-md">
      <h1 className="mb-4 text-3xl font-bold">{restaurant.name}</h1>
      <p className="mb-2 text-lg">{restaurant.address}</p>
      <p className="mb-4 text-lg">{restaurant.telephone}</p>
      <div className="flex justify-between">
        <Link
          to={`/edit/${restaurant._id}`}
          className="inline-block px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="inline-block px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
        <Link
          to="/"
          className="inline-block px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default RestaurantDetail;

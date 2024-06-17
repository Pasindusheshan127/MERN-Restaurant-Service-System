import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import AddRestaurant from "./components/AddRestaurant";
import EditRestaurant from "./components/EditRestaurant";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto  p-4">
        <Routes>
          <Route path="/" Component={RestaurantList} />
          <Route path="/restaurants/:id" Component={RestaurantDetail} />
          <Route path="/add" Component={AddRestaurant} />
          <Route path="/edit/:id" Component={EditRestaurant} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

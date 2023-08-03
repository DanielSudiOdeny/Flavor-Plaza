import { useEffect, useState } from "react";
import NavBar from "../pages/NavBar";
import Menu from "../pages/Menu";
import Restaurants from "./Restaurants";
export default function Home() {
  const [food, setFood] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div className="container">
      <NavBar orderData={orderData} />
      <div className="main-container">
        <Restaurants restaurants={restaurants} />
                
      </div>
      <div className="main-container">
        <Menu food={food} orderData={orderData} setOrderData={setOrderData} />
      </div>
    </div>
  );
}

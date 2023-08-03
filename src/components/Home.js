import { useEffect, useState } from "react";
import NavBar from "../Navigations/NavBar";

import Restaurants from "./Restaurants";
export default function Home() {
  const [orderData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div className="container">
      <NavBar orderData={orderData} />
      <div className="main-container">
        <Restaurants
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          restaurants={restaurants}
        />
      </div>
      <div className="main-container"></div>
    </div>
  );
}

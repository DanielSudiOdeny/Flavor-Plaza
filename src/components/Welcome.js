import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../Pages/TopNavBar";

import Footer from "./Footer";
import "../welcome.css";

const Welcome = () => {
  const [food, setFood] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  const handleRestaurantClick = (foodId) => {
    navigate(`/home`);
  };
  const handleFoodClick = (foodId) => {
    navigate(`/menu`);
  };
  const numberOfFoodsToShow = 3;
  const numberOfRestaurantsToShow = 5;

  return (
    <div className="welcome-container">
      <TopNavBar />
      <div className="main-content">
        <div className="food-grid">
          {restaurants
            .slice(0, numberOfRestaurantsToShow)
            .map((restaurantItem) => (
              <div
                key={restaurantItem.id}
                className="food-card"
                onClick={() => handleRestaurantClick(restaurantItem.id)}
              >
                <div className="card h-100">
                  <img
                    src={restaurantItem.photo}
                    className="food-img"
                    alt={restaurantItem.name}
                  />
                  <div className="card-body">
                    <h5 className="food-name">{restaurantItem.name}</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="main-content">
        <div className="food-grid">
          {food.slice(0, numberOfFoodsToShow).map((foodItem) => (
            <div
              key={foodItem.id}
              className="food-card"
              onClick={() => handleFoodClick(foodItem.id)}
            >
              <div className="card h-100">
                <img
                  src={foodItem.photoName}
                  className="food-img"
                  alt={foodItem.name}
                />
                <div className="card-body">
                  <h5 className="food-name">{foodItem.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;

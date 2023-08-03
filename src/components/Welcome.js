import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../Navigations/TopNavBar";
import SidePanel from "../Navigations/SidePanel";
import Footer from "./Footer";
import "../welcome.css";

const Welcome = () => {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  const handleFoodClick = (foodId) => {
    navigate(`/menu`);
  };

  return (
    <div className="welcome-container">
      <TopNavBar />
      <SidePanel />

      <div className="main-content">
        <div className="food-grid">
          {food.map((foodItem) => (
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

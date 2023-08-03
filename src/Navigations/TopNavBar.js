import React from "react";
import { Link } from "react-router-dom";
import FoodCourtLogo from "../assets/FoodCourtLogo.jpeg";

const TopNavBar = () => {
  return (
    <nav className="top-nav">
      <div className="container">
        <img src={FoodCourtLogo} alt="" className="nav-logo" />

        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button type="button">Search</button>
        </div>
        <Link to="/login " className="logo">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default TopNavBar;

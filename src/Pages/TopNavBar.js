import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FoodCourtLogo from "../assets/FoodCourtLogo.jpeg";
import AuthContext from "./AuthContext"; // Update the path based on your folder structure

const TopNavBar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="top-nav">
      <div className="container">
        <img src={FoodCourtLogo} alt="" className="nav-logo" />

        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button type="button">Search</button>
        </div>
        {!isLoggedIn && (
          <Link to="/login" className="logo">
            Login
          </Link>
        )}
        {/* Add other links or components for authenticated users */}
      </div>
    </nav>
  );
};

export default TopNavBar;

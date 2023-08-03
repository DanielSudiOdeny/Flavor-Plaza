import React from "react";
import { Link } from "react-router-dom";

const SidePanel = ({ handleComponentChange }) => {
  return (
    <div className="side-panel">
      <div className="side-panel-header">
        <h4>Flavor Plaza</h4>
      </div>
      <ul className="side-panel-menu">
        <li>
          <Link to="/home" onClick={() => handleComponentChange("component1")}>
            Restaurants
          </Link>
        </li>
        {/* <li>
          <Link
            to="/component2"
            onClick={() => handleComponentChange("component2")}
          >
            Foods
          </Link>
        </li> */}
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default SidePanel;

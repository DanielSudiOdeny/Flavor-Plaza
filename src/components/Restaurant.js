import { Link } from "react-router-dom";

function Restaurant({ restaurant }) {
  return (
    <div className="col restaurant-content">
      <div className="restaurant-image-container">
        <img className="" src={restaurant.photo} alt={restaurant.name} />
      </div>
      <Link to="/menu " className="logo">
        <h5 style={{ color: "black" }}> {restaurant.name}</h5>
      </Link>
    </div>
  );
}

export default Restaurant;

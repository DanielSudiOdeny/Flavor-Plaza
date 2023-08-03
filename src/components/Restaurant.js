function Restaurant({ restaurant }) {
  return (
    <div className="col restaurant-content">
      <div className="restaurant-image-container">
        <img className="" src={restaurant.photo} alt={restaurant.name} />
      </div>
      <h5>{restaurant.name}</h5>
    </div>
  );
}

export default Restaurant;

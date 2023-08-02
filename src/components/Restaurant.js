import React, { useState, useEffect } from 'react';

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <h4>{restaurant.contact}</h4>
            <img src={restaurant.photo}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}
<h2></h2>
export default Restaurant;




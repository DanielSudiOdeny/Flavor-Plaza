import React, { useState, useEffect } from 'react';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('db.json')
      .then(response => response.json())
      .then(data => setRestaurants(data.restaurants))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong> - {restaurant.cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




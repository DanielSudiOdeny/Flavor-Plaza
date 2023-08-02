import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";

import "../App.css";

function App() {
  const [food, setFood] = useState([]);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  return (
    <div className="container">
      <NavBar orderData={orderData} />

      <div className="main-container">
        <Menu food={food} orderData={orderData} setOrderData={setOrderData} />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";

import "../App.css";

function App() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  return (
    <>
      <NavBar />
      <Menu food={food} />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Restaurant from "./Restaurant"
import "../App.css";


function App() {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurant(data));
  }, []);


  return (
    <>
      <NavBar />
      <Restaurant restaurant={restaurant}/>
    </>
  );
}

export default App;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Food from "../components/Food";
import NavBar from "./NavBar";

function Menu() {
  const [food, setFood] = useState([]);
  const [orderData, setOrderData] = useState([]);

  const [searchMenuTerm, setSearchMenuTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  function handleOnSearchMenu(e) {
    setSearchMenuTerm(e.target.value);
  }
  return (
    <>
      <NavBar orderData={orderData} />
      <div className="menu-container">
        {" "}
        <h2 className="restaurant-browse">Our Menu</h2>
        <Link to="/home">
          <button className="return-btn">Restaurants</button>
        </Link>
        <form className="d-flex my-4">
          <input
            className="form-control me-2 search-box"
            type="search"
            placeholder="Search For Your Favorite Meal"
            aria-label="Search"
            value={searchMenuTerm}
            onChange={handleOnSearchMenu}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="container-fluid menu">
          <div className=" shadow row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
            {food
              .filter((food) => {
                return searchMenuTerm.toLowerCase() === ""
                  ? food
                  : food.name.toLowerCase().includes(searchMenuTerm);
              })
              .map((food) => (
                <Food
                  food={food}
                  orderData={orderData}
                  setOrderData={setOrderData}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;

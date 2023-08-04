// import { useEffect, useState } from "react";
// import NavBar from "../pages/NavBar";
// import Menu from "../pages/Menu";
// import Restaurants from "./Restaurants";
// export default function Home() {
//   const [food, setFood] = useState([]);
//   const [orderData, setOrderData] = useState([]);
//   const [restaurants, setRestaurants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchMenuTerm, setSearchMenuTerm] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:5000/food")
//       .then((res) => res.json())
//       .then((data) => setFood(data));
//   }, []);
//   useEffect(() => {
//     fetch("http://localhost:5000/restaurants")
//       .then((res) => res.json())
//       .then((data) => setRestaurants(data));
//   }, []);

//   const handleUpdateOrderData = (newOrderData) => {
//     setOrderData([...orderData, newOrderData]);
//   };

//   return (
//     <div className="container">
//       <NavBar orderData={orderData} />
//       <div className="main-container">
//         <Restaurants
//           searchTerm={searchTerm}
//           setSearchTerm={setSearchTerm}
//           restaurants={restaurants}
//         />
//       </div>
//       <div className="main-container">
//         <Menu
//           handleUpdateOrderData={handleUpdateOrderData}
//           food={food}
//           orderData={orderData}
//           setOrderData={setOrderData}
//           setSearchMenuTerm={setSearchMenuTerm}
//           searchMenuTerm={searchMenuTerm}
//         />
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import NavBar from "../pages/NavBar";

import Restaurants from "./Restaurants";
export default function Home() {
  const [orderData, setOrderData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <>
      <NavBar orderData={orderData} setOrderData={setOrderData} />

      <div className="container">
        <div className="main-container">
          <Restaurants
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            restaurants={restaurants}
          />
        </div>
      </div>
    </>
  );
}

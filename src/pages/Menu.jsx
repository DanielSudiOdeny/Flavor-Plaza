// // import { Link } from "react-router-dom";
// // import Restaurant from "../components/Restaurant";

// function Menu({ food, orderData, setOrderData }) {
//   console.log(food);
//   return (
//     <div className="container-fluid menu">
//       <div className=" shadow row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
//         {food.map((food) => (
//           <Food food={food} orderData={orderData} setOrderData={setOrderData} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Menu;

import Food from "../components/Food";

function Menu({
  food,
  orderData,
  setOrderData,
  searchMenuTerm,
  setSearchMenuTerm,
}) {
  function handleOnSearchMenu(e) {
    setSearchMenuTerm(e.target.value);
  }
  return (
    <>
      <h2 className="restaurant-browse">Our Menu</h2>

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
    </>
  );
}

export default Menu;

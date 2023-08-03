import Food from "./Food";

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
          placeholder="Search For Your Favorite Food"
          aria-label="Search"
          value={searchMenuTerm}
          onChange={handleOnSearchMenu}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="container-fluid menu p-5 shadow">
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

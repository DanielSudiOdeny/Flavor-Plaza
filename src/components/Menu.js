import Food from "./Food";

function Menu({ food, orderData, setOrderData }) {
  return (
    <div className="container-fluid menu">
      <div className=" shadow row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
        {food.map((food) => (
          <Food food={food} orderData={orderData} setOrderData={setOrderData} />
        ))}
      </div>
    </div>
  );
}

export default Menu;

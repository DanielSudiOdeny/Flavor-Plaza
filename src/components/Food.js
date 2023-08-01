import { useState, useEffect } from "react";

function Food({ food }) {
  const [quantity, setQuantity] = useState(1);

  function handleOnAddQuantity() {
    setQuantity((q) => q + 1);
  }

  function handleOnReduceQuantity() {
    if (quantity >= 2) setQuantity((q) => q - 1);
  }

  const [totalPrice, setTotalPrice] = useState(food.price);

  useEffect(() => {
    setTotalPrice(food.price * quantity);
  }, [food.price, quantity]);
  return (
    <li className="food">
      <img className="" src={food.photoName} alt={food.name} />
      <div>
        <h5>{food.name}</h5>

        <span>Ksh {totalPrice}</span>
        <span className="quantity-btn">
          <button
            className="btn-quantity-reduce btn-quantity"
            onClick={handleOnReduceQuantity}
          >
            -
          </button>
          <span className="btn">{quantity}</span>
          <button
            className="btn-quantity-add btn-quantity"
            onClick={handleOnAddQuantity}
          >
            +
          </button>
        </span>

        <button className="order-btn">Add to Order</button>
      </div>
    </li>
  );
}

export default Food;

import { useState } from "react";
import Food from "./Food";

function Menu({ food }) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(food.price);

  function handleOnAddQuantity() {
    setQuantity((q) => q + 1);
    setPrice((p) => p * quantity);
    console.log(price);
  }

  function handleOnReduceQuantity() {
    setQuantity((q) => q - 1);
  }

  console.log(food);
  return (
    <div className="menu">
      {food.map((food) => (
        <ul className="foods">
          <Food
            food={food}
            quantity={quantity}
            onAdd={handleOnAddQuantity}
            onReduce={handleOnReduceQuantity}
            price={price}
          />
        </ul>
      ))}
    </div>
  );
}

export default Menu;

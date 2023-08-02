import { useState, useEffect } from "react";

function Food({ food, setOrderData, orderData }) {
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

  let newOrderData;
  function handleAddOrder(e) {
    e.preventDefault();

    newOrderData = {
      orderQuantity: quantity,
      orderTotalPrice: totalPrice,
      orderFoodImage: food.photoName,
      orderFoodName: food.name,
    };

    setOrderData(() => [...orderData, newOrderData]);

    console.log(orderData);
  }

  return (
    <div className="col food-container shadow p-2">
      <form onSubmit={handleAddOrder}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 p-2">
          <div className="col">
            <div className="image-container">
              <img className="" src={food.photoName} alt={food.name} />
            </div>
          </div>
          <div className="col">
            <div className="food-details-container">
              <h5>{food.name}</h5>

              <div className="quantity-price-container">
                <span>Ksh {totalPrice}</span>

                <div className="quantity-btn">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="order-btn w-100 ">
          Add to Order
        </button>
      </form>
    </div>
  );
}

export default Food;

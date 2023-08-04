import { useState, useEffect } from "react";
import Order from "./Order";

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
  const handleOnPay = (e) => {
    e.preventDefault();
    alert("Your payment has been requested.");
  };

  return (
    <div className="col-sm-3 col-md-4 col-lg-5 food-container shadow p-2">
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
        <button
          type="submit"
          className="order-btn w-100 "
          data-toggle="modal"
          data-target="#exampleModalLong"
        >
          Add to Order
        </button>

        <div
          className="modal fade"
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Your Orders
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="cart">
                <div className="cart-content">
                  <div className="orders-container">
                    {orderData.map((order) => (
                      <Order orderData={order} />
                    ))}
                  </div>
                </div>
              </div>

              <span className="order-total">
                Total: KSH{" "}
                {orderData.reduce(
                  (acc, orderData) => acc + orderData.orderTotalPrice,
                  0
                )}
              </span>

              <div className="modal-footer">
                <button type="button" className="btn-buy" onClick={handleOnPay}>
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Food;

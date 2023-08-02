import Order from "./Order";

function Cart({ orderData }) {
  const handleClick = (e) => {
    e.preventDefault();
    alert("Cart closed.");
  };

  const handleOnPay = (e) => {
    e.preventDefault();
    alert("Your payment has been requested.");
  };

  console.log(orderData["orderQuantity"]);

  return (
    <>
      <div className="cart">
        <h2 className="cart-title">Your Orders</h2>
        <div className="cart-content">
          <div className="orders-container">
            {orderData.map((order) => (
              <Order orderData={order} />
            ))}
          </div>
          <div className="total">
            <div className="total-title">Total</div>
            <div className="total-price">Ksh</div>
          </div>
          <button type="button" className="btn-buy" onClick={handleOnPay}>
            Order
          </button>
          <button onClick={handleClick}>
            <span>
              <i class="bx bxs-x-circle" id="close-cart"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;

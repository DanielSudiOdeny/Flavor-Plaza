import Order from "./Order";

function Cart({ orderData }) {
  const handleOnPay = (e) => {
    e.preventDefault();
    alert("Your payment has been requested.");
  };

  console.log(orderData["orderQuantity"]);

  return (
    <>
      <button
        type="button"
        className="cart-btn"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        <span className="cart-icon-box">
          <i className="bx bx-shopping-bag" id="cart-icon" data-quantity=""></i>
          <span className="number-of-orders">{orderData.length}</span>
        </span>
      </button>

      <div
        class="modal fade"
        id="exampleModalLong"
        tabindex="-1"
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
    </>
  );
}

export default Cart;

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
        class="cart-btn"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        <span>
          <i class="bx bx-shopping-bag" id="cart-icon" data-quantity=""></i>
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
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Your Orders
              </h5>
              <button
                type="button"
                class="close"
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
            <div class="modal-footer">
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

function Cart() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Cart closed.");
  };

  const handleOnDeleteCart = (e) => {
    e.preventDefault();
    alert("You have deleted the product.");
  };

  const handleOnPay = (e) => {
    e.preventDefault();
    alert("Your payment has been requested.");
  };

  return (
    <>
      <div className="cart">
        <h2 className="cart-title">Your Orders</h2>
        <div className="cart-content">
          <div className="cart-box">
            <img
              src="https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/n3frruwjijq8wanzdzrz"
              alt=""
              className="cart-img"
            />
            <div className="detail-box">
              <div className="food-title">King Savers</div>
              <div className="food-price">Ksh 660</div>
              <input type="number" value={1} className="product-quantity" />
            </div>
            <button onClick={handleOnDeleteCart}>
              <span>
                <i className="bx bxs-trash cart-remove m-2"></i>
              </span>
            </button>
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

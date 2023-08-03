import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Order from "./Order";

function Cart({ orderData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOnPay = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    navigate("/welcome");
  };

  return (
    <>
      <button
        type="button"
        className="cart-btn"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="cart-icon-box">
          <i className="bx bx-shopping-bag" id="cart-icon" data-quantity=""></i>
          <span className="number-of-orders">{orderData.length}</span>
        </span>
      </button>

      {isModalOpen && (
        <div className="cart-overlay">
          <div className=" container py-5 custom-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your Orders</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="cart">
                  <div className="cart-content">
                    <div className="orders-container">
                      {orderData.map((order) => (
                        <Order orderData={order} key={order.id} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <span className="order-total">
                  Total: KSH{" "}
                  {orderData.reduce(
                    (acc, orderData) => acc + orderData.orderTotalPrice,
                    0
                  )}
                </span>
                <button type="button" className="btn-buy" onClick={handleOnPay}>
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;

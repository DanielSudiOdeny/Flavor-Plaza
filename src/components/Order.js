import React from "react";

function Order({ orderData }) {
  const handleOnDeleteCart = (e) => {
    e.preventDefault();
    alert("You have deleted the product.");
  };
  return (
    <div className="cart-box">
      <img src={orderData.orderFoodImage} alt="" className="cart-img" />
      <div className="detail-box">
        <div className="food-title">{orderData.orderFoodName}</div>
        <div className="food-price">Ksh {orderData.orderTotalPrice}</div>
        <span>{orderData.orderQuantity}</span>
      </div>
      <button onClick={handleOnDeleteCart}>
        <span>
          <i className="bx bxs-trash cart-remove m-2"></i>
        </span>
      </button>
    </div>
  );
}

export default Order;

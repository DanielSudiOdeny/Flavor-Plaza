import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const cartItemsList = cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
      </div>
    </div>
  ));

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? <p>Your cart is empty.</p> : cartItemsList}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Total: ${totalAmount}</p>
          {/* Add checkout button and other relevant content here */}
        </div>
      )}
    </div>
  );
};

export default CartPage;

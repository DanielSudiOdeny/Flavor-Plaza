import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handlePlaceOrder = () => {
    // Handle the place order logic here
    // You can use the shippingDetails and cartItems to process the order
    console.log("Order placed!", shippingDetails, cartItems);
  };

  return (
    <div className="checkout-page">
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Display total amount or any other relevant order summary information */}
      </div>
      <div className="shipping-details">
        <h2>Shipping Details</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={shippingDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingDetails.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={shippingDetails.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={shippingDetails.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={shippingDetails.postalCode}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <div className="payment-section">
        <h2>Payment</h2>
        {/* Add payment-related components or form here */}
      </div>
      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;

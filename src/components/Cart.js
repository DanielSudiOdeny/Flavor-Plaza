

function Cart({food, onReduce, onAdd, quantity, price, onOrder }) {

    return(   
        <>
            <div className="cart">
                <h2 className="cart-title">Food Cart</h2>
                <div className="cart-box">
                    <img className="" src={food.photoName} alt={food.name} />
                    <div className="detail-box">
            <button
              className="btn-quantity-reduce btn-quantity"
              onClick={onReduce}
            >
              -
            </button>
            <span className="btn">{quantity}</span>
            <button className="btn-quantity-add btn-quantity" onClick={onAdd}>
              +
            </button>
          </span>
  
          <button className="order-btn" onClick={onOrder}>Complete Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
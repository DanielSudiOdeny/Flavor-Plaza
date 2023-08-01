
function Food({ food, onReduce, onAdd, quantity, price, onOrder}) {
    return (
      <li className="food">
        <img className="img" src={food.photoName} alt={food.name} />
        <div>
          <h5>{food.name}</h5>
          {/* <p>{food.ingredients}</p> */}
          <span>Ksh {price}</span>
          <span className="quantity-btn">
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
            <button className="order-btn" onClick={onOrder}>Add to Order</button>
           
        </div>
      </li>
    );
  }
  
  export default Food;
  
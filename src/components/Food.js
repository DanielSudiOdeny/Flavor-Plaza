// import { useState, useEffect } from "react";

// function Food({ food }) {
//   const [quantity, setQuantity] = useState(1);

//   function handleOnAddQuantity() {
//     setQuantity((q) => q + 1);
//   }

//   function handleOnReduceQuantity() {
//     if (quantity >= 2) setQuantity((q) => q - 1);
//   }

//   const [totalPrice, setTotalPrice] = useState(food.price);

//   useEffect(() => {
//     setTotalPrice(food.price * quantity);
//   }, [food.price, quantity]);
//   return (
//     <li className="food col">
//       <div className="food-details">
//         <img className="" src={food.photoName} alt={food.name} />
//         <div>
//           <h5>{food.name}</h5>

//           <div className="quantity-price-container">
//             <span>Ksh {totalPrice}</span>

//             <span className="quantity-btn">
//               <button
//                 className="btn-quantity-reduce btn-quantity"
//                 onClick={handleOnReduceQuantity}
//               >
//                 -
//               </button>
//               <span className="btn">{quantity}</span>
//               <button
//                 className="btn-quantity-add btn-quantity"
//                 onClick={handleOnAddQuantity}
//               >
//                 +
//               </button>
//             </span>
//           </div>
//         </div>
//       </div>
//       <button className="order-btn">Add to Order</button>
//     </li>
//   );
// }

// export default Food;

import { useState, useEffect } from "react";

function Food({ food }) {
  const [quantity, setQuantity] = useState(1);

  function handleOnAddQuantity() {
    setQuantity((q) => q + 1);
  }

  function handleOnReduceQuantity() {
    if (quantity >= 2) setQuantity((q) => q - 1);
  }

  const [totalPrice, setTotalPrice] = useState(food.price);

  useEffect(() => {
    setTotalPrice(food.price * quantity);
  }, [food.price, quantity]);

  return (
    <div className="col food-container shadow p-2">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 p-2">
        <div className="col">
          <div className="image-container">
            <img className="" src={food.photoName} alt={food.name} />
          </div>
        </div>
        <div className="col">
          <div className="food-details-container">
            <h5>{food.name}</h5>
            <div className="quantity-price-container">
              <span>Ksh {totalPrice}</span>

              <div className="quantity-btn">
                <button
                  className="btn-quantity-reduce btn-quantity"
                  onClick={handleOnReduceQuantity}
                >
                  -
                </button>
                <span className="btn">{quantity}</span>
                <button
                  className="btn-quantity-add btn-quantity"
                  onClick={handleOnAddQuantity}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="order-btn w-100 ">Add to Order</button>
    </div>
  );
}

export default Food;

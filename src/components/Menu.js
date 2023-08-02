// import Food from "./Food";

// function Menu({ food }) {
//   console.log(food);
//   return (
//     <div className="menu container">
//       {food.map((food) => (
//         <div className="foods row">
//           <Food food={food} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Menu;

import Food from "./Food";

function Menu({ food }) {
  console.log(food);
  return (
    <div className="container-fluid menu">
      <div className=" shadow row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
        {food.map((food) => (
          <Food food={food} />
        ))}
      </div>
    </div>
  );
}

export default Menu;

import Food from "./Food";

function Menu({ food }) {
  console.log(food);
  return (
    <div className="menu">
      {food.map((food) => (
        <ul className="foods">
          <Food food={food} />
        </ul>
      ))}
    </div>
  );
}

export default Menu;

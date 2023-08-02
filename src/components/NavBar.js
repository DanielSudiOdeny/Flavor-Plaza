import Cart from "./Cart";

function NavBar({orderData}) {
  return (
    <header>
      <div className="navbar-content">
        <img src="./assets/FoodCourtLogo.jpeg" alt="" className="navbar-logo" />
        <span className="nav-login">Login</span>
      </div>

      <Cart orderData={orderData} />
    </header>
  );
}

export default NavBar;

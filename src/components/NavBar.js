import Cart from "./Cart";

function NavBar() {
  return (
    <header>
      <div className="navbar-content">
        <img src="./assets/FoodCourtLogo.jpeg" alt="" className="navbar-logo" />
        <span className="nav-login">Login</span>
      </div>

      <Cart />
    </header>
  );
}

export default NavBar;

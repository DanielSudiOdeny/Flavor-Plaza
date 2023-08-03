import Cart from "../components/Cart";
// import Search from "../components/Search";

import FoodCourtLogo from "../assets/FoodCourtLogo.jpeg";

function NavBar({ orderData }) {
  return (
    <>
      <nav className="navbar navbar-light bg-light ">
        <div className="container-fluid ">
          <img src={FoodCourtLogo} alt="" className="nav-logo" />

          <Cart orderData={orderData} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;

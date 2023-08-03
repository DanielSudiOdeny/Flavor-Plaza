import Cart from "../components/Cart";
// import Search from "../components/Search";

import FoodCourtLogo from "../assets/FoodCourtLogo.jpeg";

function NavBar({ orderData }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={FoodCourtLogo} alt="" className="nav-logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          
        </div>
        <Cart orderData={orderData} />
      </nav>
    </>
  );
}

export default NavBar;

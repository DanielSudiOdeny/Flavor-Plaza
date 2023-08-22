import { Link } from "react-router-dom";
import FoodCourtLogo from "../assets/FoodCourtLogo.jpeg";
import Cart from "../components/Cart";

function NavBar({ orderData }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/welcome" className="logo">
            <img src={FoodCourtLogo} alt="" className="nav-logo" />
          </Link>
        </div>
        <Cart orderData={orderData} />
      </nav>
    </>
  );
}

export default NavBar;

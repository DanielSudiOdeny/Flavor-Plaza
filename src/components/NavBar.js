import Cart from './Cart' 

function NavBar(){
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log('Cart open.');
      }

    return(
        <header>
            <div className="nav container">
                <h1 className="logo">Flavour Plaza</h1>
                <button onClick={handleClick}>
                <span><i class='bx bx-shopping-bag' id="cart-icon" data-quantity=""></i></span>
                </button>
            </div>
            {/* <Cart/> */}
        </header>
    )
    
        
    
}

export default NavBar;
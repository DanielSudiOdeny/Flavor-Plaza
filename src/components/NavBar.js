import Cart from './Cart' 

function NavBar(){

    return(
        <header>
            <div className="nav container">
                <h1 className="logo">Flavour Plaza</h1>
                <span><i class='bx bx-shopping-bag' id="cart-icon" data-quantity="0"></i></span>
            </div>
            <Cart/>
        </header>
    )
    
        
    
}

export default NavBar;
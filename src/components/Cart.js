function Cart() {

    return(
        <>
            <div className="cart">
                <h2 className="cart-title">Your Orders</h2>
                <div className="cart-content">
                    <div className="cart-box">
                        <img src="https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/n3frruwjijq8wanzdzrz" alt="" className="cart-img"/>
                        <div className="detail-box">
                            <div className="food-title">King Savers</div>
                            <div className="food-price">Ksh 660</div>
                        </div>
                        <span><i className='bx bxs-trash cart-remove'></i></span>
                    </div>
                   <div className="total">
                    <div className="total-title">Total</div>
                    <div className="total-price">Ksh</div>
                    </div> 
                    <button type="button" className="btn-buy">Pay</button>
                    <span><i class='bx bxs-x-circle' id="close-cart"></i></span>
                </div>
                
            </div>
        </>
    )
}

export default Cart;
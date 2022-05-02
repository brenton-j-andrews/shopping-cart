import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {

    function cartContents() {
        
        let cart_contents;
    
        if (props.cart.length === 0) {
            cart_contents = <div className="empty-cart">
                                <p> You have no items in your shopping cart.</p>
                                <p> Click <Link to="/shopping">here</Link> to continue shopping. </p>
                            </div>
        }

        else {
            cart_contents = props.cart.map((item) => cartCard(item));
        }

        return cart_contents;
    }

    function cartCard(item) {
        const { id, img, roaster, name, price} = item;
        console.log(id);

        let cart_contents = 

        <div key={id} className="cart-card">
            <p> { img } </p>
            <p> { roaster }</p>
            <p> { name }</p>
            <p> { price } </p>
        </div>

        return cart_contents;
    }

    return (
        <div className="cart-page-wrapper"> 

            <div className="cart-header-wrapper">
                <p className="cart-header"> My Cart: </p>
            </div>

            <div className="cart-wrapper">
                <div className="cart-summary">
                    { cartContents() }
                </div>

                <div className="order-summary">
                    This is the order summary!
                </div>
                
            </div> 
        </div>
    )
}

export default Cart;
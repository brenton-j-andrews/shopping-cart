import React from "react";
import { Link } from "react-router-dom";


const Cart = (props) => {

    let item_count = props.item_count;

    // Parse cart prop to render cart contents as JSX.
    function cartContents() {
        let cart_contents;
    
        if (item_count === 0) {
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

    // Create cart card JSX for display.
    function cartCard(item) {
    
        const { quantity, id, roaster, name, price } = item;
        let cart_contents;

        if (quantity !== 0) {

            cart_contents = 

            <div key={id} className="cart-card">

                <img className="cart-card-image" src={item.image} alt="Coffee"></img>

                <div className="cart-card-left">
                    <p> { roaster }</p>
                    <p> { name }</p>
                    <button className="remove_btn" onClick={() => props.removeFromCart(id)}> Remove </button>
                </div>
                
                <div className="cart-card-quantity">
                    <p> QTY </p>
                    <div className="quantity-child">
                        <button className="inc_btn" onClick={() => props.incrementCartItem(id, "-")}> - </button>
                        <p className="quantity-item"> { quantity } </p>
                        <button className="inc_btn" onClick={() => props.incrementCartItem(id, "+")}> + </button>
                    </div>
                </div>

                <p className="cart-card-price"> {"$" + price } </p>

            </div>
        }



        return cart_contents;
    }

    // Calculate order subtotal amount.
    function productsTotal() {
        let products_total = 0;

        for (let i = 0; i < props.cart.length; i++) {
            if (props.cart[i].quantity !== 0) {
                products_total += props.cart[i].price * props.cart[i].quantity;
            }
            
        }
        return products_total;
    }
 
    // Return JSX for order summary section.
    function orderSummary() {
        let order_summary;
        let shipping_banner;
        let products_total = productsTotal(item_count);
        let tax_total = Math.round(products_total * .03 * 100) / 100;
        let shipping_total = (products_total >= 50) ? 0 : 6;
        let order_total = Math.round((products_total + tax_total + shipping_total) * 100) / 100;

        if (shipping_total !== 0) {
            shipping_banner = `Spend $${50 - products_total} more for FREE shipping`;
        } else {
            shipping_banner = "Your order ships for FREE!";
        }

        if (item_count > 0) {
            order_summary = <div className="order-summary">

                <p className="shipping-banner"> {shipping_banner} </p>

                <table className="checkout-table">
                    <tbody>
                        <tr className="checkout-row">
                            <td className="checkout-title">Subtotal</td>
                            <td className="checkout-num">${products_total}</td>
                        </tr>

                        <tr>
                            <td className="checkout-title">Tax</td>
                            <td className="checkout-num">${tax_total}</td>
                        </tr>

                        <tr>
                            <td className="checkout-title">Shipping</td>
                            <td className="checkout-num">${shipping_total}</td>
                        </tr>

                        <tr className="order-total">
                            <td className="checkout-title">Order Total</td>
                            <td className="checkout-num">${order_total}</td>
                        </tr>
                    </tbody>
                </table>

                <button> CHECKOUT </button>
            </div>
        }

        return order_summary;
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

                { orderSummary() }
      
            </div> 
        </div>
    )
}

export default Cart;
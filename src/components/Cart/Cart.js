import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {

    let products_total = 0;
    console.log(typeof(products_total));

    // Parse cart prop to render cart contents.
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

    // Create cart cards for display.
    function cartCard(item) {
        const { id, img, roaster, name, price} = item;

        let cart_contents = 

        <div key={id} className="cart-card">
            <p> { img } </p>
            <p> { roaster }</p>
            <p> { name }</p>
            <p> {"$" + price } </p>
        </div>

        return cart_contents;
    }

    // Calculate required data for the order summary cart section.
    function productsTotal() {
        
        for (let i = 0; i < props.cart.length; i++) {
            console.log(typeof(props.cart[i].price));
            products_total += props.cart[i].price;
        }

        return products_total;
    }
 
    // Return JSX for order summary section.
    function orderSummary() {
        let order_summary;
        let shipping_banner;
        let products_total = productsTotal(props);
        let tax_total = Math.round(products_total * .03 * 100) / 100;
        let shipping_total = (products_total >= 50) ? 0 : 6;
        let order_total = Math.round((products_total + tax_total + shipping_total) * 100) / 100;

        if (shipping_total !== 0) {
            shipping_banner = `Spend $${50 - products_total} more for FREE shipping`;
        } else {
            shipping_banner = "Your order ships for FREE!";
        }

        if (props.cart.length > 0) {
            order_summary = <div className="order-summary">

                <p> {shipping_banner} </p>

                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>{products_total}</td>
                    </tr>

                    <tr>
                        <td>Tax</td>
                        <td>{tax_total}</td>
                    </tr>

                    <tr>
                        <td>Shipping</td>
                        <td>{shipping_total}</td>
                    </tr>

                    <tr>
                        <td>Order Total</td>
                        <td>{order_total}</td>
                    </tr>
                </table>
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
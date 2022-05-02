import React from "react";

import coffee_products from "../../products/products";

import Card from "./Card";
import ShopSidebar from "./ShopSidebar";

const Shop = (props) => {


    let product_cards = coffee_products.map((coffee) => (
        
        <Card 
        id={coffee.id}
        roaster={coffee.roaster}
        name={coffee.name}
        image_src={coffee.image}
        price = {Number(coffee.price)}
        roast = {coffee.roast}
        singleOrigin =  {coffee.singleOrigin}
        pourOver = {coffee.pourOver}
        espresso = {coffee.espresso}
        addToCart = {props.addToCart}
        />
    ))

    return (
        <div className="shop-wrapper"> 

            <div className="shop-header-wrapper">
                <p className="shop-header"> Shop Our Coffees </p>
            </div>

            <div className="shop-wrapper-lower">
                <ShopSidebar />
                <div className="product-cards-wrapper">
                        {product_cards}
                </div>
            </div> 
        </div>
    )
}

export default Shop;
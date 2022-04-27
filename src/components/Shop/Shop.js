import React from "react";

import Card from "./Card";
import ShopHero from "./ShopHero";
import coffee_products from "../../products/products";


const Shop = (props) => {

    let product_cards = coffee_products.map((coffee) => (
        
        <Card 
        key={coffee.id}
        roaster={coffee.roaster}
        name={coffee.name}
        image_src={coffee.image}
        price = {coffee.price}
        roast = {coffee.roast}
        singleOrigin =  {coffee.singleOrigin}
        pourOver = {coffee.pourOver}
        espresso = {coffee.espresso}
        />
    ))

    return (
        <div className="shop-wrapper"> 
        <ShopHero />
            <div className="product-cards-wrapper">
                {product_cards}
            </div>
            
        </div>
    )
}

export default Shop;
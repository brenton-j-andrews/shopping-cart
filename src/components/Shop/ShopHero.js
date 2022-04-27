import React from "react";

import coffee_banner from "../../assets/images/coffee_banner.jpeg";

const ShopHero = () => {
    return (
        <div className="shop-hero">
            <h1 className="shop-hero-header"> Shop Our Coffees </h1>
            <img src={coffee_banner} alt=""></img>
        </div>
    )
}

export default ShopHero;
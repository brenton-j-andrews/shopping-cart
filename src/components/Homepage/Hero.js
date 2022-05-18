import React from "react";

import hero_img from "../../assets/images/hero_img.jpg";

const Hero = (props) => {
    return (
        <div className="homepage-hero">
            <img className="hero-img" src={ hero_img } alt="Coffee"></img>

            <div className="hero-text-content">
                <p className="hero-text">Free Shipping, Easy Returns and Great Products? You got that right. <a href="/dummy"> Learn More → </a></p> 
            </div>
        </div>
    )
}

export default Hero;
// Product card component for the shopping pages.

import React from "react";


const Card = (props) => {

    return (
        <div className="product-card">
            <img className="product-card-image" src={props.image_src} alt="Coffee"></img>

            <div className="product-card-info">
                <div className="product-brand"> { props.roaster } </div>
                <div className="product-name"> { props.name } </div>
                <div className="product-price">  { props.price } </div>
                <button className="product-cart-button" onClick = {() => props.addToCart(props)}> Add to Cart </button>
            </div>

        </div>
    )
}

export default Card;
import React from "react";
import "../../styles/Homepage.css";

import cat1 from "../../assets/icons/category-espresso-machines.svg";
import cat2 from "../../assets/icons/category-coffee-makers.svg";
import cat3 from "../../assets/icons/category-superautomatics.svg";
import cat4 from "../../assets/icons/category-accessories.svg";
import cat5 from "../../assets/icons/category-grinders.svg";
import cat6 from "../../assets/icons/category-coffee-beans.svg";


const Categories = (props) => {
    return (
        <div className="categories-wrapper">
            <p className="categories-header"> Everything you need to make coffee you'll love! </p>
            <div className="categories">

                <div className="category">
                    <img className="category-svg" src={ cat1 } alt="Coffee"></img>
                    <div className="category-contents">
                        <p className="category-title"> Espresso Machines</p>
                        <p className="category-description"> Cafe-style espresso drinks straight from your home!</p>
                        <a href="/dummy" className="category-btn"> Shop Now → </a>
                    </div>
                </div>

                <div className="category">
                    <img className="category-svg" src={ cat3 } alt="Coffee"></img>
                    <div className="category-contents">
                        <p className="category-title"> Superautomatics </p>
                        <p className="category-description"> Simple, all-in-one espresso drinks at the touch of a few buttons.</p>
                        <a href="/dummy"className="category-btn"> Shop Now → </a>
                    </div>
                </div>

                <div className="category">
                    <img className="category-svg" src={ cat5 } alt="Coffee"></img>
                    <div className="category-contents">
                        <p className="category-title"> Grinders </p>
                        <p className="category-description"> A quality coffee grinder makes all the difference in your cup.</p>
                        <a href="/dummy" className="category-btn"> Shop Now → </a>
                    </div>
                </div>

                <div className="category">
                    <img className="category-svg" src={ cat2 } alt="Coffee"></img>
                    <div className="category-contents">
                        <p className="category-title"> Coffee Makers</p>
                        <p className="category-description"> Take a classic pot of drip coffee to the next level. </p>
                        <a href="/dummy" className="category-btn"> Shop Now → </a>
                    </div>
                </div>

                <div className="category">
                    <img className="category-svg" src={ cat4 } alt="Coffee"></img>
                    <div className="category-contents">
                        <p className="category-title"> Accessories</p>
                        <p className="category-description"> All of the odds and ends - from kettles, to scales, to mugs and more! </p>
                        <a href="/dummy" className="category-btn"> Shop Now → </a>
                    </div>
                </div>

                <div className="category">
                    <img className="category-svg" src={ cat6 } alt="Coffee"></img>
                    <div className="category-contents">
                        <p className="category-title"> Coffee Beans </p>
                        <p className="category-description"> Hand-selected, fresh roasted, and delievered straight to your door!</p>
                        <a href="/shopping" className="category-btn"> Shop Now → </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
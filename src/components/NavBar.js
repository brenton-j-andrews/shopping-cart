import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {

    let cart_item_count = props.item_count;

    return (
        <div className="nav-bar">
            <div className="nav-bar-free-shipping">
                <p className="free-shipping"> Free shipping on orders over $49.99!</p>
            </div>
            <div className="nav-bar-upper">
                <h1 className="nav-bar-title"> The Coffee Shop </h1>
            </div>
            
            <header className="nav-bar-header">

                <div className="nav-bar-header-left">
                    <Link className="nav-bar-link" to="/"> Home </Link>
                    <Link className="nav-bar-link" to="/shopping"> Shop Coffee </Link>
                    <Link className="nav-bar-link" to="/"> Shop Gear </Link>
                </div>

                <div className="nav-bar-header-right">
                    <Link className="nav-bar-link" to="/account"> Account </Link>
                    <Link className="nav-bar-link" to="/service"> Help </Link>
                    <Link className="nav-bar-link" to="/cart"> {`Cart ${cart_item_count}`} </Link>
                </div>
            </header>
        </div>
    )
}

export default NavBar;
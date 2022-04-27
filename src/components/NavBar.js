import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-upper">
                <h1 className="nav-bar-title"> The Coffee Shop </h1>
                <input className="nav-bar-search" value="Search for your favorite coffees here!"></input>
            </div>
            
            <header className="nav-bar-header">

                <div className="nav-bar-header-left">
                    <Link className="nav-bar-link" to="/"> Home </Link>
                    <Link className="nav-bar-link" to="/shopping"> Shop </Link>
                </div>

                <div className="nav-bar-header-right">
                    <Link className="nav-bar-link" to="/account"> Account </Link>
                    <Link className="nav-bar-link" to="/service"> Help </Link>
                    <Link className="nav-bar-link" to="/cart"> Your Cart </Link>
                </div>
            </header>
        </div>
    )
}

export default NavBar;
import React, { useState } from "react";


const ShopSidebar = (props) => {
    return (
        <NavBar>
            <NavItem text="Roast"> 
                <DropdownMenu />
            </NavItem>
            <NavItem text="Specialty" />
            <NavItem text="Brew Method" />
        </NavBar>
    )
}

function NavBar(props) {
    return (
        <nav className="shop-nav-bar">
            <ul className="navbar-nav"> { props.children } </ul>
        </nav>
    )
}

function NavItem(props) {
    const [ open, setOpen ] = useState(false);

    return (
        <li className="nav-item">
            <p className="nav-button" onClick={() => {setOpen(!open)}}>
                {props.text}
            </p>

            {open && props.children}
        </li>
        
        
    )
}

function DropdownMenu() {
    function DropdownItem(props) {
        return (
            <a href="/#" className="shop-nav-menu-item">
                { props.children }
            </a>
        )
    }

    return (
        <div className="shop-dropdown">
            <DropdownItem> Light </DropdownItem>
            <DropdownItem> Medium </DropdownItem>
            <DropdownItem> Dark </DropdownItem>
        </div>
    )
}

export default ShopSidebar;
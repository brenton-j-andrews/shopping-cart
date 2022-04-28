import React from "react";

import { sideBarItems } from "./sideBarItems";

const ShopSidebar = () => {
    return (
        <nav className="side-bar">
            <ul className="side-bar-options">

                { sideBarItems.map(( option, index) => {
                    return (
                        <li className="side-bar-items" key={ index }>
                            <a href="/#" > {option.title} </a>
                        </li>
                    )})
                }
            </ul>

        </nav>
    )
}

export default ShopSidebar;
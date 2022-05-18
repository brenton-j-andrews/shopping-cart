import React from "react";
import "../../styles/Homepage.css";

import Hero from "./Hero";
import Categories from "./Categories";

const Homepage = () => {
    return (
        <div className="homepage">
            < Hero />
            < Categories />
        </div>
    )
}

export default Homepage;
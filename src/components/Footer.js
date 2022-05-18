import React from "react";

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-upper">
                <div className="footer-questions">
                    <strong className="footer-label"> Questions? </strong>
                    <ul>
                        <li><button className="footer-btn"> Contact Us </button></li>
                        <li><button className="footer-btn"> Commercial Support </button></li>
                        <li><button className="footer-btn"> Order & Shipping Policy </button></li>
                        <li><button className="footer-btn"> Return Policy </button></li>
                        <li><button className="footer-btn"> Promotion Exclusions </button></li>
                        <li><button className="footer-btn"> Price Matching </button></li>
                    </ul>
                </div>

                <div className="footer-extra-content">
                    <strong className="footer-label"> More From TCS </strong>
                    <ul>
                        <li><button className="footer-btn"> Repairs & Service </button></li>
                        <li><button className="footer-btn"> TCS Podcast </button></li>
                        <li><button className="footer-btn"> Classes & Events </button></li>
                        <li><button className="footer-btn"> Retail Stores </button></li>
                    </ul>
                </div>

                <div className="footer-company">
                    <strong className="footer-label"> Company </strong>
                    <ul>
                        <li><button className="footer-btn"> Our Story </button></li>
                        <li><button className="footer-btn"> TCS Crew </button></li>
                        <li><button className="footer-btn"> Careers </button></li>
                        <li><button className="footer-btn"> Media Partners </button></li>
                        <li><button className="footer-btn"> Terms of Use </button></li>
                        <li><button className="footer-btn"> Privacy Policy </button></li>
                    </ul>
                </div>

                <div className="footer-promo">
                    <p> Join our mailing list and be the first to learn about exclusive offers and new products! </p>
                    <div className="promo-input">
                        <input type="text" placeholder="Your Email" required></input>
                        <button> &#62; </button>
                    </div>
                </div>
            </div>
            
            <div className="footer-lower">
                <p>Site design, contents and icons inspired and sourced from <a href="https://www.seattlecoffeegear.com/">Seattle Coffee Gear</a>.</p>
                <p> Copyright 2022 - Brenton Andrews - <a href="https://github.com/brenton-j-andrews/shopping-cart">GitHub</a></p>
            </div>
            
        </div>
    )
}

export default Footer;
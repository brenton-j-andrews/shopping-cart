// Array of all available coffee products.

import espresso1 from "../assets/images/espresso1.jpg";
import espresso2 from "../assets/images/espresso2.jpg";
import espresso3 from "../assets/images/espresso3.jpg";
import espresso4 from "../assets/images/espresso4.jpg";
import espresso5 from "../assets/images/espresso5.jpg";
import espresso6 from "../assets/images/espresso6.jpg";
import single_origin1 from "../assets/images/single_origin1.jpg";
import single_origin2 from "../assets/images/single_origin2.jpg";
import single_origin3 from "../assets/images/single_origin3.jpg";
import single_origin4 from "../assets/images/single_origin4.jpg";
import single_origin5 from "../assets/images/single_origin5.jpg";
import single_origin6 from "../assets/images/single_origin6.jpg";
import single_origin7 from "../assets/images/single_origin7.png";
import single_origin8 from "../assets/images/single_origin8.png";
import single_origin9 from "../assets/images/single_origin9.jpg";
import single_origin10 from "../assets/images/single_origin10.png";

let coffee_products = [
    
    {
        id: 1,
        roaster: "Tony's Coffee",
        name: "Sugar Bee Espresso",
        image: espresso1,
        price: 15,
        roast: "medium",
        singleOrigin: false,
        pourOver: false,
        espresso: true
    },

    {
        id: 2,
        roaster: "Victrola Coffee",
        name: "Tribourough Espresso",
        image: espresso2,
        price: 15.50,
        roast: "medium",
        singleOrigin: false,
        pourOver: false,
        espresso: true
    },

    {
        id: 3,
        roaster: "Dogwood Coffee",
        name: "Bear Hug Espresso",
        image: espresso3,
        price: "17",
        roast: "medium",
        singleOrigin: false,
        pourOver: false,
        espresso: true
    },

    {
        id: 4,
        roaster: "Olympia Coffee Roasting",
        name: "Big Truck Espresso",
        image: espresso4,
        price: 16.50,
        roast: "medium",
        singleOrigin: false,
        pourOver: false,
        espresso: true
    },

    {
        id: 5,
        roaster: "Camber Coffee",
        name: "Dailed In Espresso",
        image: espresso5,
        price: 16,
        roast: "medium",
        singleOrigin: false,
        pourOver: false
    },

    {
        id: 6,
        roaster: "Middle Fork Roasters",
        name: "Full City Espresso",
        image: espresso6,
        price: 14.99,
        roast: "dark",
        singleOrigin: false,
        pourOver: false,
        espresso: true
    },

    {
        id: 7,
        roaster: "Olympia Coffee",
        name: "Peru Espiritu Cusco",
        image: single_origin1,
        price: 19,
        roast: "light",
        singleOrigin: true,
        pourOver: true,
        espresso: true
    },

    {
        id: 8,
        roaster: "Wonderstate Coffee",
        name: "Comlombia Fondo Paez",
        image: single_origin2,
        price: 20,   
        roast: "light",
        singleOrigin: true,
        pourOver: true,
        espresso: true
    },

    {
        id: 9,
        roaster: "Boost Coffee Co.",
        name: "Guatemala Cimarron Light",
        image: single_origin3,
        price: 12.25,
        roast: "light",
        singleOrigin: true,
        pourOver: true,
        espresso: false
    },

    {
        id: 10,
        roaster: "Wonderstate Coffee",
        name: "Comlombia Fondo Paez",
        image: single_origin4,
        price: 20,
        roast: "light",
        singleOrigin: true,
        pourOver: true,
        espresso: true
    },

    {
        id: 11,
        roaster: "Venton's Coffee",
        name: "Mexico Nayarita",
        image: single_origin5,
        price: 18,
        roast: "medium",
        singleOrigin: true,
        pourOver: true,
        espresso: false
    },

    {
        id: 12,
        roaster: "Bluebeard Coffee Roasters",
        name: "Colombua Los Guacharos",
        image: single_origin6,
        price: 17,
        roast: "medium",
        singleOrigin: true,
        pourOver: true,
        espresso: false
    },

    {
        id: 13,
        roaster: "Methodical Coffee",
        name: "Brazil Dulce Signature",
        image: single_origin7,
        price: 15,
        roast: "medium",
        singleOrigin: true,
        pourOver: true,
        espresso: false
    },

    {
        id: 14,
        roaster: "Tony's Coffee",
        name: "Kenya Kiunyu",
        image: single_origin8,
        price: 16,
        roast: "light",
        singleOrigin: true,
        pourOver: true,
        espresso: false
    },

    {
        id: 15,
        roaster: "Brandywine Coffee Roasters",
        name: "Costa Rica Las Lajas",
        image: single_origin9,
        price: 23,
        roast: "medium",
        singleOrigin: true,
        pourOver: true,
        espresso: false
    },

    {
        id: 16,
        roaster: "Oynx Coffee Lab",
        name: "Colombia Aponte Village",
        image: single_origin10,
        price: 17,
        roast: "medium",
        singleOrigin: true,
        pourOver: true,
        espresso: false
    },

    
]

export default coffee_products;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Component and CSS imports.
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage"
import Shop from "./components/Shop/Shop"
import Cart from "./components/Cart/Cart";


import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cart : []
    }

    this.addToCart = this.addToCart.bind(this);
  }

  // Add new item to the cart.
  addToCart(event) {
    this.setState({
      cart : [...this.state.cart, event]
    })
  }

  render() {
    let cart = this.state.cart;
    
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar cart ={cart}/>
          <Routes>
            <Route path="/" element= { <Homepage /> }></Route>
            <Route path="/shopping" element = { <Shop addToCart = {this.addToCart} /> }></Route>
            <Route path="/cart" element = { <Cart cart = {this.state.cart} />}></Route> 
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Component and CSS imports.
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage"
import Shop from "./components/Shop/Shop"
import Cart from "./components/Cart/Cart";
import coffee_products from "./products/products";


import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cart : coffee_products,
      item_count : 0
    }

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.incrementCartItem = this.incrementCartItem.bind(this);
  }

  // Add new item to the cart / update quantity of item in the cart already.
  addToCart(event) {

    let index = this.state.cart.findIndex(product => product.id === event.id);
    let copy_cart = [...this.state.cart];
    let item = {...copy_cart[index]};

    item.quantity ++;
    copy_cart[index] = item;

    this.setState({
      cart : copy_cart,
      item_count : this.state.item_count + 1
    })
  }
  
  // Remove an item from the cart.
  removeFromCart(id) {
    let index =  this.state.cart.findIndex(product => product.id === id);
    let copy_cart = [...this.state.cart];
  
    let item = {...copy_cart[index]}
    let copy_quantity = item.quantity;
    item.quantity = 0;
    copy_cart[index] = item;

    this.setState({
      cart : copy_cart,
      item_count : this.state.item_count - copy_quantity
    })
  }

  // Increment item quantity in the cart.
  incrementCartItem(id, symbol) {
    let index =  this.state.cart.findIndex(product => product.id === id);
    let item_count_inc;
    let copy_cart = [...this.state.cart];
    let item = {...copy_cart[index]}
    copy_cart[index] = item;

    if (symbol === "+") {
      item.quantity++;
      item_count_inc = 1
    } else {
      item.quantity--;
      item_count_inc = -1
    }

    this.setState({
      cart : copy_cart,
      item_count : this.state.item_count + item_count_inc
    })
  }


  render() {
    
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar item_count = { this.state.item_count }/>
          <Routes>
            <Route path="/" element= { <Homepage /> }></Route>
            <Route path="/shopping" element = { <Shop addToCart = {this.addToCart} /> }></Route>
            <Route path="/cart" element = { <Cart cart = {this.state.cart} item_count = {this.state.item_count} removeFromCart = {this.removeFromCart } incrementCartItem = {this.incrementCartItem} />}></Route> 
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Component and CSS imports.
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage"
import Shop from "./components/Shop/Shop"



import './styles/App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element= {<Homepage />}></Route>
          <Route path="/shopping" element = {<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

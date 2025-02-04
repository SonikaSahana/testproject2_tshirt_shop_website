// src/App.js
import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ProductForm from "./ProductForm";
import { ShopProvider } from "./context/ShopContext";
import "./App.css";

function App() {
  return (
    <ShopProvider>
      <div className="App">
        <nav className="navbar">
          <h1>T-Shirt Shop</h1>
        </nav>
        <ProductForm />
        <ProductList />
        <Cart />
      </div>
    </ShopProvider>
  );
}

export default App;

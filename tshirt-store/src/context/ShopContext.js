// src/context/ShopContext.js
import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  
  const handleOrder = () => {
    alert("Order placed successfully!");
    setCart([]);
  };

  
  const handleClose = () => {
    setCart([]);
  };

  return (
    <ShopContext.Provider
      value={{ products, cart, addProduct, addToCart, handleOrder, handleClose }}
    >
      {children}
    </ShopContext.Provider>
  );
};


export const useShop = () => {
  return useContext(ShopContext);
};

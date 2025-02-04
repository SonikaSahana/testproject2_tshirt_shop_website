// src/Cart.js
import React from "react";
import { useShop } from "./context/ShopContext";
import "./Cart.css";

const Cart = () => {
  const { cart, handleClose, handleOrder } = useShop();

  return (
    <div className="cart">
      <h2>Cart ({cart.length} items)</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - {item.size}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          ))}
          <div className="cart-buttons">
            <button onClick={handleClose} className="close-btn">Close</button>
            <button onClick={handleOrder} className="order-btn">Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

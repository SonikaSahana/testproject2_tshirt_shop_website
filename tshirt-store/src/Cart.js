import React from 'react';
import './Cart.css';

const Cart = ({ cart, onClose, onOrder }) => {
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
            <button onClick={onClose} className="close-btn">Close</button>
            <button onClick={onOrder} className="order-btn">Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

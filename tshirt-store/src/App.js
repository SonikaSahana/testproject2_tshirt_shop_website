import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  
  return (
    <div className="App">
      <h1>T-shirt Shop</h1>
      <Cart cart={cart} />
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default App;

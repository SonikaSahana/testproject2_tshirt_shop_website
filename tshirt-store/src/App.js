import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import ProductForm from './ProductForm';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Function to add a new product
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to clear the cart on order
  const handleOrder = () => {
    alert('Order placed successfully!');
    setCart([]);
  };

  // Function to close the cart
  const handleClose = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <h1>T-shirt Shop</h1>
      <ProductForm addProduct={addProduct} />
      <Cart cart={cart} onClose={handleClose} onOrder={handleOrder} />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Product.css';

const Product = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, size: selectedSize });
    } else {
      alert('Please select a size');
    }
  };

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <div>
        {product.availableSizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            style={{
              backgroundColor: selectedSize === size ? 'gray' : 'white',
              border: selectedSize === size ? '2px solid black' : '1px solid #ccc',
              padding: '5px 10px',
              margin: '5px',
              cursor: 'pointer',
            }}
          >
            {size}
          </button>
        ))}
      </div>
      <button onClick={handleAddToCart} disabled={!selectedSize}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

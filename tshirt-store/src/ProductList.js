import React from 'react';
import Product from './Product';

const ProductList = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Navy Blue Armani Tshirt',
      description: '100% cotton',
      price: 1299,
      availableSizes: ['L', 'M', 'S'],
    },
    {
      id: 2,
      name: 'Gucci Tshirt',
      description: '100% cotton',
      price: 2000,
      availableSizes: ['L', 'M', 'S'],
    },
  ];
  
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price || !sizes) {
      alert('Please fill all fields');
      return;
    }
    const productSizes = sizes.split(',').map((size) => size.trim());
    addProduct({ name, description, price: parseFloat(price), availableSizes: productSizes });
    setName('');
    setDescription('');
    setPrice('');
    setSizes('');
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sizes (comma separated)"
        value={sizes}
        onChange={(e) => setSizes(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

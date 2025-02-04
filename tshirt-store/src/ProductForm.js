// src/ProductForm.js
import React, { useState } from "react";
import { useShop } from "./context/ShopContext";
import "./ProductForm.css";

const ProductForm = () => {
  const { addProduct } = useShop();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);

  const availableSizes = ["S", "M", "L", "XL"];

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price || selectedSizes.length === 0) {
      alert("Please fill all fields");
      return;
    }
    addProduct({ name, description, price: parseFloat(price), availableSizes: selectedSizes });
    setName("");
    setDescription("");
    setPrice("");
    setSelectedSizes([]);
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
      <div className="size-checkboxes">
        <p>Select Sizes:</p>
        {availableSizes.map((size) => (
          <label key={size}>
            <input
              type="checkbox"
              value={size}
              checked={selectedSizes.includes(size)}
              onChange={() => handleSizeChange(size)}
            />
            {size}
          </label>
        ))}
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

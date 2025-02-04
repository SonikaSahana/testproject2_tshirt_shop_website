// src/ProductList.js
import React from "react";
import Product from "./Product";
import { useShop } from "./context/ShopContext";
import "./ProductList.css";

const ProductList = () => {
  const { products, addToCart } = useShop();

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products added yet. Add products to display here.</p>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  );
};

export default ProductList;

import React, { useState, useContext } from 'react';
import './ProductItem.css';

const ProductItem = () => {

  return (
    <div className="product-card">
      <img className="product-image" src={imageMap[product.image]} alt={product.name} />
      <div className="product-details">
        <h3 style={{ fontWeight: '700' }}>{product.name}</h3>
        <p style={{ fontWeight: '500' }}>Price: Rs.{product.price}</p>
        <div className="size-selector">
          <label htmlFor="size">Size:</label>
          <button>-</button>
          <span>{sizes[currentSizeIndex]}</span>
          <button>+</button>
        </div>
        <button>Add to Wishlist</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
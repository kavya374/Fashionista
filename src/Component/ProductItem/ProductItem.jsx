import React, { useState, useContext } from 'react';
import './ProductItem.css';
import { ItemContext, imageMap } from '../../context/ItemContext';

const ProductItem = () => {

  const { addToCart, addToWishlist } = useContext(ItemContext);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);

  const handleAddToCart = () => {
    addToCart({ ...product, size: sizes[currentSizeIndex] });
  };

  const handleAddToWishlist = () => {
    addToWishlist({ ...product, size: sizes[currentSizeIndex] });
  };

  const handleIncrementSize = () => {
    setCurrentSizeIndex((prevIndex) => (prevIndex < sizes.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handleDecrementSize = () => {
    setCurrentSizeIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  console.log("Product image filename:", product.image);
  console.log("Mapped image:", imageMap[product.image]);

  return (
    <div className="product-card">
      <img className="product-image" src={imageMap[product.image]} alt={product.name} />
      <div className="product-details">
        <h3 style={{ fontWeight: '700' }}>{product.name}</h3>
        <p style={{ fontWeight: '500' }}>Price: Rs.{product.price}</p>
        <div className="size-selector">
          <label htmlFor="size">Size:</label>
          <button onClick={handleDecrementSize}>-</button>
          <span>{sizes[currentSizeIndex]}</span>
          <button onClick={handleIncrementSize}>+</button>
        </div>
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductItem;
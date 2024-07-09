import React, { useContext, useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { ItemContext } from '../../context/ItemContext';  
import './Products.css';

const Products = () => {

  const { products } = useContext(ItemContext);  
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
      setSortedProducts([...products])
  }, [products])

  const handleSortByPrice = () => {
      const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
      setSortedProducts(sorted);
  };

  const handleFilterByPriceRange = () => {
      const filtered = products.filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
      );
      setSortedProducts(filtered);
  };

  const handleFilterByType = () => {
      if (selectedType === 'all') {
          setSortedProducts([...products]);
      } else {
          const filtered = products.filter((product) => product.type === selectedType);
          setSortedProducts(filtered);
      }
  };

  return (
      <div className='prdt-list'>
          <h2>Product List</h2>
          <div className='filter-btn'>
              <button onClick={handleSortByPrice}>Sort by Price</button>
                  <input
                      type='number'
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                  />
                  <input
                      type='number'
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                  />
              <button onClick={() => handleFilterByPriceRange()}>
                      Filter by Price Range
                  </button>
              <label>
                  <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                  >
                      <option value='all'>All</option>
                      <option value='Men'>Men</option>
                      <option value='Women'>Women</option>
                      <option value='Kids'>Kids</option>
                  </select>
              </label>
              <button onClick={handleFilterByType}>Filter by Type</button>
          </div>

          <ul className='item-card'>
              {sortedProducts.map((product) => (
                  <ProductItem key={product._id} product={product} />
              ))}
          </ul>
      </div>
  );
};


export default Products;
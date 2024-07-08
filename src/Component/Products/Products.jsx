import React, { useContext, useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './Products.css';

const Products = () => {

  return (
      <div className='prdt-list'>
          <h2>Product List</h2>
          <div className='filter-btn'>
              <button>Sort by Price</button>
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
              <button>
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
              <button>Filter by Type</button>
          </div>

          <ul className='item-card'>
              
          </ul>
      </div>
  );
};

export default Products;
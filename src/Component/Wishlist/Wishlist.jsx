import React, { useState } from 'react';
import './Wishlist.css'; 
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Stylish Jacket',
      image: 'https://m.media-amazon.com/images/I/81boXIR+s3L._AC_UL480_FMwebp_QL65_.jpg',
      price: '$49.99'
    },
    {
      id: 2,
      name: 'Elegant Dress',
      image: 'https://m.media-amazon.com/images/I/612pnIERmkL._AC_UL480_FMwebp_QL65_.jpg',
      price: '$89.99'
    },

  ]);

  return (
    <div className="wishlist-container">
      <div style={{display:'flex', alignItems:'center',justifyContent:'center', gap:'1rem'}}>
      <h2>My Wishlist</h2>
      <div style={{fontSize:'25px', color:'rgb(211, 10, 121)'}}><FaHeart /></div>
      </div>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is currently empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeItemFromWishlist(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  function removeItemFromWishlist(id) {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  }
};

export default Wishlist;

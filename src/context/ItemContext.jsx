import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import productImage1 from 'https://m.media-amazon.com/images/I/71fz6+A0heL._AC_UL480_FMwebp_QL65_.jpg';
import productImage2 from 'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg';
import productImage3 from 'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg';
import productImage4 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage5 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage6 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage7 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage8 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage9 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage10 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage11 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage12 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage13 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage15 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage16 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage17 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage18 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage19 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage20 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage21 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage22 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage23 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage24 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage25 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage26 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage27 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage28 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage29 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage30 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage31 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage32 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';
import productImage33 from 'https://m.media-amazon.com/images/I/617eNMSdK6L._AC_UL480_FMwebp_QL65_.jpg';
import productImage34 from 'https://m.media-amazon.com/images/I/617eNMSdK6L._AC_UL480_FMwebp_QL65_.jpg';
import productImage35 from 'https://m.media-amazon.com/images/I/617eNMSdK6L._AC_UL480_FMwebp_QL65_.jpg';
import productImage36 from 'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg';

const imageMap = {
  'https://m.media-amazon.com/images/I/71fz6+A0heL._AC_UL480_FMwebp_QL65_.jpg': productImage1,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage2,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage3,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage4,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage5,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage6,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage7,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage8,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage9,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage10,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage11,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage12,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage13,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage14,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage15,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage16,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage17,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage18,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage19,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage20,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage21,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage22,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage23,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage24,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage25,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage26,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage27,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage28,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage29,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage30,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage31,
  'https://m.media-amazon.com/images/I/81Ey+UJyIIL._AC_UL480_FMwebp_QL65_.jpg': productImage32,
  'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg': productImage33,
  'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg': productImage34,
  'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg': productImage35,
  'https://m.media-amazon.com/images/I/41eepoLTqeL._AC_UL480_FMwebp_QL65_.jpg': productImage36,
};

const ItemContext = createContext();

const CustomItemContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [itemsInWishlist, setItemsInWishlist] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fashionista-besm.onrender.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setItemsInCart([...itemsInCart, product]);
    setTotalPrice(totalPrice + product.price);
  };

  const removeFromCart = (product) => {
    setItemsInCart(itemsInCart.filter(item => item._id !== product._id));
    setTotalPrice(totalPrice - product.price);
  };

  const addToWishlist = (product) => {
    setItemsInWishlist([...itemsInWishlist, product]);
  };

  const removeFromWishlist = (product) => {
    setItemsInWishlist(itemsInWishlist.filter(item => item._id !== product._id));
  };

  return (
    <ItemContext.Provider value={{
      products,
      itemsInCart,
      itemsInWishlist,
      totalPrice,
      addToCart,
      removeFromCart,
      addToWishlist,
      removeFromWishlist,
      imageMap 
    }}>
      {children}
    </ItemContext.Provider>
  );
};

export default CustomItemContext;
export { ItemContext, imageMap }; 
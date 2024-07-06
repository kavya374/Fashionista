import React, { useState } from 'react';
import { SiStylelint } from 'react-icons/si';
import './Navbar1.css';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  const [active, setActive] = useState("/");

  return (
    <div className="navb">
      <div className="navb1">
        <p><Link to="/" onClick={() => setActive("/")} className={active === "/" ? "active" : ""}>Fashionista</Link></p>
        <div>
          <SiStylelint />
        </div>
      </div>
      <div className="navb2">
        <Link to="/" onClick={() => setActive("/")} className={active === "/" ? "active" : ""}>Home</Link>
        <Link to="/products" onClick={() => setActive("/products")} className={active === "/products" ? "active" : ""}>Products</Link>
        <Link to="/wishlist" onClick={() => setActive("/wishlist")} className={active === "/wishlist" ? "active" : ""}>Wishlist</Link>
        <Link to="/cart" onClick={() => setActive("/cart")} className={active === "/cart" ? "active" : ""}>Cart</Link>
        <Link to="/queries" onClick={() => setActive("/queries")} className={active === "/queries" ? "active" : ""}>Queries</Link>
      </div>
      <div className="navb3">
        <div><Link to="/login" onClick={() => setActive("/login")} className={active === "/login" ? "active" : ""}>Login/Signup</Link></div>
       
      </div>
    </div>
  );
};

export default Navbar1;



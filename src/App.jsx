import React from "react";
import "./App.css";
import Navbar1 from "./Component/Navbar1/Navbar1";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wishlist from "./Component/Wishlist/Wishlist";
import Queries from "./Component/Queries/Queries";
import LoginForm from "./Component/Login/LoginForm";
import Products from "./Component/Products/Products";

function App() {
  return (
    <div>
       <Router basename="/Fashionista">
        <Navbar1 />
        <Routes>
          <Route exact path="/Fashionista" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

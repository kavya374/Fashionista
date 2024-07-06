import React from 'react';
import './App.css';
import Navbar1 from './Component/Navbar1/Navbar1';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wishlist from './Component/Wishlist/Wishlist';
import Queries from './Component/Queries/Queries';
import LoginForm from './Component/Login/LoginForm';

function App() {
  return (
  
      <Router>
        <div className="app-container">
          <Navbar1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/queries" element={<Queries />} />
            <Route path="/login" element={<LoginForm />} />
            
          </Routes>
        </div>
      </Router>
  
  );
}

export default App;


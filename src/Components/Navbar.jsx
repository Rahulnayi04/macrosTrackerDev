import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="your-logo.png" alt="Logo" /> */}
        <span>Macros-Tracker</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="login-button">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

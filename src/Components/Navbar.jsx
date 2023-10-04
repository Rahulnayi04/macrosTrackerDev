import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const {user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
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
        {isAuthenticated ? <button onClick={logout}>Log out</button> : <button onClick={(e)=> loginWithRedirect()}>Login</button>}
        
      </div>
    </nav>
  );
};

export default Navbar;

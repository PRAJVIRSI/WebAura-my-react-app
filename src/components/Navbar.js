import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.jpg';

const Navbar = () => {
  return (
    <nav>
      <div className="logo"><img src={logoImage} alt="WebAura Logo"></img></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import sectionImage from '../images/section.jpg';
const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to WebAura</h1>
        <p>Crafting unique web experiences for modern brands.</p>
      </div>
      <div className="section">
        <h2>Our Philosophy</h2>
        <p>At WebAura, we believe in creating web solutions that are not only visually appealing but also functionally robust. Our team is dedicated to delivering high-quality digital experiences.</p>
        <img src={sectionImage} alt="Our Philosophy" />
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import servicesImage from '../images/services.jpg';


const Services = () => {
  return (
    <div className="section">
      <h1>Our Services</h1>
      <p>We offer a wide range of services to meet your web development needs.</p>
      <img src={servicesImage}  alt="Our Services" />

      <h2>Web Design</h2>
      <p>Creating beautiful, responsive websites that engage and convert.</p>
      
      <h2>E-commerce Solutions</h2>
      <p>Building online stores that provide seamless shopping experiences.</p>

      <h2>SEO Optimization</h2>
      <p>Improving your website's visibility on search engines.</p>
      
      <h2>Content Management</h2>
      <p>Offering content management solutions that are easy to use and scale.</p>
    </div>
  );
};

export default Services;

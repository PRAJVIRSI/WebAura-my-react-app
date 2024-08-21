import React from 'react';
import contactImage from '../images/contact-us.jpg';

const ContactUs = () => {
  return (
    <div className="section">
      <h1>Contact WebAura</h1>
      <p>We would love to hear from you! Whether you have a question about our services or want to start a project, feel free to reach out.</p>
      <img src={contactImage} alt="Contact Us" />
      
      <h2>Get In Touch</h2>
      <p>Email: contact@webaura.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 WebAura Lane, Brantford, ON N3T 3A7</p>
    </div>
  );
};

export default ContactUs;

import React from 'react';
import aboutUsImage from '../images/about-us.jpg';
import teamImage from '../images/team.jpg';
const About = () => {
  return (
    <div className="section">
      <h1>About WebAura</h1>
      <p>WebAura is a creative web design studio that specializes in developing modern, user-friendly websites. We are passionate about combining form and function to create seamless digital experiences.</p>
      <img src={aboutUsImage} alt="About WebAura" />      
      <h2>Our Mission</h2>
      <p>To empower businesses by providing them with cutting-edge web solutions that drive engagement and success.</p>
      
      <h2>Our Team</h2>
      <p>We are a group of passionate web developers, designers, and strategists who work together to bring your ideas to life. Our expertise spans across various industries and technologies.</p>
      <img src={teamImage} alt="Team WebAura" />
    </div>
  );
};

export default About;

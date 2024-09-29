import React from 'react';
import './Footer.css';
import adaanlogo from '../../assets/adanlogo.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>WHAT WE DO</h3>
          <ul>
            <li>Web / Mobile</li>
            <li>Social Media</li>
            <li>Internet Marketing</li>
            <li>E-commerce</li>
            <li>Custom Project</li>
            <li>Photo Editing</li>
            <li>Consultancy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>SITE MAP</h3>
          <ul>
            <li>Our Process</li>
            <li>About Us</li>
            <li>Free Trial</li>
            <li>Career</li>
            <li>Life at Adaan</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <img className='img-foot' src={adaanlogo}/>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Third Floor, Tej Building, 8B, Bahadur Shah Zafar Marg, New Delhi – 110002, India</p>
        <p>Phone: +91-8800897632</p>
        <p>Email: sumita@adaan.com</p>
      
      </div>
    </footer>
  );
};

export default Footer;

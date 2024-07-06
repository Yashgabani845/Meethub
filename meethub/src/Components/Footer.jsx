import React from "react";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>
         it is my practice project of video calling platform, i am eager to get feedback and suggestions thank you for visiting
        </p>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: gabaniyash846@gmail.com</p>
        <p>Phone: 7046996816</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Setting</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-media">
          <a href="#" className="social-icon">Youtube</a>
          <a href="#" className="social-icon">Github</a>
          <a href="#" className="social-icon">LinkedIn</a>
          <a href="#" className="social-icon">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Meethub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

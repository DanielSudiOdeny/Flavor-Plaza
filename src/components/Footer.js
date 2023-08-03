import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

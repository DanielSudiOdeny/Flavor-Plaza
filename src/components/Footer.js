import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className=" container">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.pinterest.com/pin/43417583900778737/">
            About Us
          </a>
          <a href="https://www.pinterest.com/pin/680113981213206375/">
            Contact Us
          </a>
          <a href="https://www.pinterest.com/pin/6192518228585133/">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

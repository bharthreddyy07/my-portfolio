import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p>&copy; {currentYear} Bharath Reddy. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

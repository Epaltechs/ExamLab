import React from "react";

const MobileNavbar = ({ navbar, setNavbar }) => {
  return (
    <ul className={`${navbar ? "nav-mobile-listing" : "nav-mobile-hidden"}`}>
      <li>
        <a href="#home" className="nav-mobile-listing-link">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="nav-mobile-listing-link">
          About Us
        </a>
      </li>
      <li>
        <a href="#pricing" className="nav-mobile-listing-link">
          Pricing
        </a>
      </li>
      <li>
        <a href="#features" className="nav-mobile-listing-link">
          Features
        </a>
      </li>
      <li>
        <a href="#login" className="nav-mobile-listing-link">
          Login
        </a>
      </li>
    </ul>
  );
};

export default MobileNavbar;
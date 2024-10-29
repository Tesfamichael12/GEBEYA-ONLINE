import React, { useState } from "react";
import "../../css/style.css";
import "../../css/normalize.css";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search-2.svg";
import userIcon from "../../assets/user.svg";
import wishlistIcon from "../../assets/wishlist.svg";
import cartIcon from "../../assets/cart.svg";
import menuIcon from "../../assets/menu.svg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="block container header">
      {/* Navbar */}
      <div className="navbar-container scrolled">
        <div className="navbar scrolled container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search for product..." />
            <button className="search-button">
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
          <div className="icons">
            <div className="icon-container wishlist">
              <img src={userIcon} alt="User" className="icon" />
            </div>
            <div className="icon-container wishlist">
              <img src={wishlistIcon} alt="Wishlist" className="icon" />
              <span className="icon-badge">1</span>
            </div>
            <div className="icon-container cart">
              <img src={cartIcon} alt="Cart" className="icon" />
              <span className="icon-badge">1</span>
            </div>
          </div>
          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={`menu-container container ${isMenuOpen ? "open" : ""}`}>
          <div className="menu" id="menu">
            <a href="#" className="menu-item categories">
              <img
                src={menuIcon}
                alt="Menu"
                style={{ width: "12px", margin: "0 10px" }}
              />
              All Categories
            </a>
            <a href="#" className="menu-item">
              Offers
            </a>
            <a href="#" className="menu-item">
              Today’s Deals
            </a>
            <a href="#" className="menu-item">
              Order Tracking
            </a>
            <div className="help-contact">
              Need help?
              <a href="mailto:contact@example.com" className="contact-text">
                contact@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;

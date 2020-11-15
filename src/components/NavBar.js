import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCart';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="navbar__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        ></img>
      </Link>
      <div className="navbar__search">
        <input type="text" className="navbar__searchInput"></input>
        <SearchIcon className="navbar__searchIcon"></SearchIcon>
      </div>
      <div className="navbar__nav">
        <Link to="login" className="navbar__link">
          <div className="navbar__option">
            <span className="navbar__optionLine1">Hello,</span>
            <span className="navbar__optionLine2">Sign In</span>
          </div>
        </Link>
        <Link to="/orders" className="navbar__link">
          <div className="navbar__option">
            <span className="navbar__optionLine1">Returns&</span>
            <span className="navbar__optionLine2">Orders</span>
          </div>
        </Link>
        <Link to="/cart" className="navbar__link">
          <div style={{ flexDirection: 'row' }} className="navbar__option">
            <ShoppingBasketIcon className="navbar__basketIcon"></ShoppingBasketIcon>
            <span style={{ marginTop: '10px' }} className="navbar__optionLine2">
              Cart
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

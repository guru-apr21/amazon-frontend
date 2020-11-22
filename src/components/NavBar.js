import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';

import { getTotalItemsInCart, setCart } from '../reducers/cartReducer';

function NavBar() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCart());
  }, [dispatch]);

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
        {!user ? (
          <Link to="login" className="navbar__link">
            <div className="navbar__option">
              <span className="navbar__optionLine1">Hello,</span>
              <span className="navbar__optionLine2">Sign In</span>
            </div>
          </Link>
        ) : (
          <Link to="/user" className="navbar__link">
            <div className="navbar__option">
              <span className="navbar__optionLine1">
                Hello, {user.firstName}
              </span>
              <span className="navbar__optionLine2">Account Details</span>
            </div>
          </Link>
        )}
        <Link to="/orders" className="navbar__link">
          <div className="navbar__option">
            <span className="navbar__optionLine1">Returns&</span>
            <span className="navbar__optionLine2">Orders</span>
          </div>
        </Link>

        <Link to="/cart" className="navbar__link">
          <div style={{ flexDirection: 'row' }} className="navbar__option">
            <ShoppingBasketIcon className="navbar__basketIcon"></ShoppingBasketIcon>
            <span style={{ marginTop: '15px' }} className="navbar__optionLine2">
              Cart
            </span>
            <span className="navbar__cartCount">
              {cart.length > 0 ? getTotalItemsInCart(cart) : 0}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

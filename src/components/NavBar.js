import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../reducers/userReducer';
import { clearOrders } from '../reducers/orderReducer';
import {
  clearCart,
  getTotalItemsInCart,
  setCart,
} from '../reducers/cartReducer';

function NavBar() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setCart());
  }, [dispatch]);

  const handleSignOut = () => {
    dispatch(clearCart());
    dispatch(clearUser());
    dispatch(clearOrders());
    history.replace('/');
  };

  const handleCart = () => {
    if (!user) {
      history.push('/login');
    }
  };

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
          <div className="navbar__option">
            <span className="navbar__optionLine1">Hello, {user.firstName}</span>
            <span
              onClick={handleSignOut}
              style={{ cursor: 'pointer' }}
              className="navbar__optionLine2"
            >
              Sign Out
            </span>
          </div>
        )}
        <Link to="/orders" className="navbar__link">
          <div className="navbar__option">
            <span className="navbar__optionLine1">Returns&</span>
            <span className="navbar__optionLine2">Orders</span>
          </div>
        </Link>
        <div onClick={handleCart}>
          <Link to="/cart" className="navbar__link">
            <div style={{ flexDirection: 'row' }} className="navbar__option">
              <ShoppingBasketIcon className="navbar__basketIcon"></ShoppingBasketIcon>
              <span
                style={{ marginTop: '15px' }}
                className="navbar__optionLine2"
              >
                Cart
              </span>
              <span className="navbar__cartCount">
                {cart.length > 0 ? getTotalItemsInCart(cart) : 0}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

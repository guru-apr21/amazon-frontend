import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser, createSeller } from '../reducers/userReducer';
import { clearOrders } from '../reducers/orderReducer';
import { clearCart } from '../reducers/cartReducer';
import { useHistory, Link } from 'react-router-dom';
import '../css/user.css';

function User() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const history = useHistory();
  const handleSignOut = () => {
    dispatch(clearCart());
    dispatch(clearUser());
    dispatch(clearOrders());
    history.replace('/');
  };

  const handleSeller = () => {
    try {
      dispatch(createSeller());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user">
      {user && (
        <>
          <h1>Login & Security</h1>

          <div className="user__details">
            <ul className="user__lists">
              <li className="user__list">
                <span className="user__optionLine1">First Name:</span>
                <span className="user__optionLine2">{user.firstName}</span>
              </li>
              <li className="user__list">
                <span className="user__optionLine1">Last Name</span>
                <span className="user__optionLine2">{user.lastName}</span>
              </li>
              <li className="user__list">
                <span className="user__optionLine1">Email</span>
                <span className="user__optionLine2">{user.email}</span>
              </li>
              {user.role === 'seller' && (
                <li className="user__list">
                  <span className="user__optionLine1">Role</span>
                  <span className="user__optionLine2">{user.role}</span>
                </li>
              )}
            </ul>
          </div>
          <button onClick={handleSignOut}>Sign Out</button>
          {user.role !== 'seller' && (
            <button onClick={handleSeller}>Start Selling</button>
          )}
          {user.role !== 'buyer' && (
            <Link to="/products">
              <button>Your Products</button>
            </Link>
          )}
        </>
      )}
    </div>
  );
}

export default User;

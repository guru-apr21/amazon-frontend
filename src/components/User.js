import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/user.css';
import { clearUser } from '../reducers/userReducer';
import { clearOrders } from '../reducers/orderReducer';
import { clearCart } from '../reducers/cartReducer';
import { useHistory } from 'react-router-dom';

function User() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignOut = () => {
    dispatch(clearCart());
    dispatch(clearUser());
    dispatch(clearOrders());
    history.replace('/');
  };
  const handleSeller = () => {};

  return (
    <div className="user">
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
      <button onClick={handleSeller}>Start Selling</button>
    </div>
  );
}

export default User;

import React, { useState } from 'react';
import '../css/SignIn.css';
import { signin } from '../services/signInService';
import { Link, useHistory } from 'react-router-dom';
import { setUser } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      setEmail('');
      setPassword('');
      const { user } = await signin({ email, password });
      dispatch(setUser(user));
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin">
      <Link to="/">
        <img
          className="signin__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="signin__border">
        <h1>SignIn</h1>
        <form className="sigin__form" onSubmit={handleSignIn}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="sigin__input"
            type="email"
            onChange={handleEmail}
            value={email}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="sigin__input"
            type="password"
            value={password}
            onChange={handlePassword}
          ></input>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

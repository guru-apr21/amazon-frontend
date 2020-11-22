import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../reducers/userReducer';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(signUpUser({ firstName, lastName, password, email }));
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      history.replace('/');
    } catch (err) {
      console.log(err);
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
        <h1>Sign Up</h1>
        <form className="sigin__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            className="sigin__input"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            className="sigin__input"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <label htmlFor="email">email</label>
          <input
            id="email"
            className="sigin__input"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">password</label>
          <input
            id="password"
            className="sigin__input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p style={{ marginTop: '10px' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

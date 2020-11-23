import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../reducers/userReducer';

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(signUpUser(values));
      setValues({});
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
            name="firstName"
            id="firstName"
            className="sigin__input"
            type="text"
            onChange={handleChange}
            value={values['firstName']}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            id="lastName"
            className="sigin__input"
            type="text"
            onChange={handleChange}
            value={values['lastName']}
            required
          />
          <label htmlFor="email">email</label>
          <input
            name="email"
            id="email"
            className="sigin__input"
            type="email"
            onChange={handleChange}
            value={values['email']}
            required
          />
          <label htmlFor="password">password</label>
          <input
            name="password"
            id="password"
            className="sigin__input"
            type="password"
            onChange={handleChange}
            value={values['password']}
            required
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

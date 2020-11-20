import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const handleSubmit = () => {};

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
          <input id="firstName" className="sigin__input" type="text" />
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" className="sigin__input" type="text" />
          <label htmlFor="email">email</label>
          <input id="email" className="sigin__input" type="text" />
          <label htmlFor="password">password</label>
          <input id="password" className="sigin__input" type="text" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img
        className="amazon__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt=""
      />
    </Link>
  );
}

export default Logo;

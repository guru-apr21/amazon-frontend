import React from 'react';
import './Button.css';

function Button({ label, handler }) {
  return (
    <button className="button" onClick={handler}>
      {label}
    </button>
  );
}

export default Button;

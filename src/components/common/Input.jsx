import React, { forwardRef } from 'react';
import ErrorMessage from './ErrorMessage';

const Input = forwardRef(
  ({ label, name, type = 'text', min, error, onBlur }, ref) => {
    return (
      <>
        <label className="form__label">{label}</label>
        <input
          className="form__input"
          name={name}
          ref={ref}
          type={type}
          onBlur={onBlur}
        ></input>
        <ErrorMessage label={label} min={min} error={error}></ErrorMessage>
      </>
    );
  }
);

export default Input;

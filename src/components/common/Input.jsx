import React, { forwardRef } from 'react';
import ErrorMessage from './ErrorMessage';

const Input = forwardRef(
  (
    { label, name, min, error, onBlur, multiple = false, type = 'text' },
    ref
  ) => {
    return (
      <>
        <label>{label}</label>
        <input
          name={name}
          ref={ref}
          type={type}
          onBlur={onBlur}
          multiple={multiple}
        ></input>
        <ErrorMessage label={label} min={min} error={error}></ErrorMessage>
      </>
    );
  }
);

export default Input;

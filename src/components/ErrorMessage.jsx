import React from 'react';

function ErrorMessage({ error, label, min }) {
  if (error) {
    switch (error.type) {
      case 'required':
        return <p>{label} is required</p>;
      case 'minLength':
        return (
          <p>
            {label} should be atleast {min} characters long
          </p>
        );
      case 'pattern':
        return <p>Invalid {label}</p>;
      case 'validate':
        return <p>User already exists!</p>;
      default:
        return null;
    }
  } else {
    return null;
  }
}

export default ErrorMessage;

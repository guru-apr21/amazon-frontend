import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
  color: #a31616;
  &:before {
    display: inline;
    content: '⚠ ';
  }
`;

function ErrorMessage({ error, label, min }) {
  if (error) {
    switch (error.type) {
      case 'required':
        return <Message>{label} is required</Message>;
      case 'minLength':
        return (
          <Message>
            {label} should be atleast {min} characters long
          </Message>
        );
      case 'pattern':
        return <Message>Invalid {label}</Message>;
      case 'validate':
        return <Message>User already exists!</Message>;
      default:
        return null;
    }
  } else {
    return null;
  }
}

export default ErrorMessage;

import React, { forwardRef } from 'react';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  display: block;
  padding: 3px 7px;
  border-radius: 3px;
  border: 1px solid #a6a6a6;
  ${({ $style }) => $style ?? {}}
`;

const RenderInput = forwardRef(
  (
    { label, name, min, error, onBlur, multiple = false, type = 'text' },
    ref
  ) => {
    return (
      <>
        <label>{label}</label>
        <StyledInput
          name={name}
          ref={ref}
          type={type}
          onBlur={onBlur}
          multiple={multiple}
        ></StyledInput>
        <ErrorMessage label={label} min={min} error={error}></ErrorMessage>
      </>
    );
  }
);

export default RenderInput;

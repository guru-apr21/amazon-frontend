import React, { forwardRef } from 'react';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 3px 7px;
  margin: 0.6em 0;
  border-radius: 3px;
  border: 1px solid #a6a6a6;
  ${({ $style }) => $style ?? {}}
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  ${({ $style }) => $style ?? {}}
`;

const RenderInput = forwardRef(
  (
    { label, name, min, error, onBlur, multiple = false, type = 'text' },
    ref
  ) => {
    return (
      <>
        <Label>{label}</Label>
        <Input
          name={name}
          ref={ref}
          type={type}
          onBlur={onBlur}
          multiple={multiple}
        ></Input>
        <ErrorMessage label={label} min={min} error={error}></ErrorMessage>
      </>
    );
  }
);

export default RenderInput;

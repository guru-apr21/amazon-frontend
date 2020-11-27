import React from 'react';
import styled from 'styled-components';
import getSymbolFromCurrency from 'currency-symbol-map';
// import PropTypes from 'prop-types';

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 5px 7px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 7px;
  padding-left: ${({ $type }) => ($type === 'currency' ? '20px' : '7px')};
  margin: 0.6em 0;
  border-radius: 3px;
  border: 1px solid #a6a6a6;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${({ $style }) => $style ?? {}};
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
`;

const Message = styled.p`
  color: #a31616;
  margin-top: -7px;
  &:before {
    display: inline;
    content: '⚠ ';
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled.i`
  position: absolute;
  display: block;
  transform: translate(0, -50%);
  top: 50%;
  width: 25px;
  text-align: center;
  font-style: normal;
`;

const IconRight = styled(Icon)`
  right: 0;
`;

const RenderInput = ({
  label,
  name,
  error,
  format,
  register,
  condition,
  style,
  type = 'text',
  ...props
}) => {
  const getValidation = () => {
    switch (type) {
      case 'alphanum':
        return {
          pattern: {
            value: /^[a-zA-Z0-9]*$/,
            message: 'should contain only alpha numeric',
          },
        };
      case 'alpha':
        return {
          pattern: {
            value: /^[A-Za-z]+$/,
            message: 'should contain only alphabhets',
          },
        };
      default:
        return null;
    }
  };

  const getType = () => {
    switch (type) {
      case 'alphanum':
        return 'text';
      case 'alpha':
        return 'text';
      case 'currency':
        return 'number';
      case 'percentage':
        return 'number';
      default:
        return type;
    }
  };

  const validation = { ...getValidation(), ...condition };
  console.log(validation);

  const symbol = getSymbolFromCurrency(format);

  return (
    <>
      <Label>{label}</Label>
      <Wrapper>
        <Input
          name={name}
          type={getType()}
          $style={style}
          $type={type}
          ref={register(validation)}
          {...props}
        ></Input>
        {type === 'currency' && <Icon>{symbol}</Icon>}
        {type === 'percentage' && <IconRight>%</IconRight>}
      </Wrapper>
      {error && <Message>{error.message}</Message>}
    </>
  );
};

// const currencyCodes = Object.keys(currencySymbolMap).map((code) =>
//   code.toLowerCase()
// );

// const inputTypes = [
//   'button',
//   'checkbox',
//   'color',
//   'date',
//   'datetime-local',
//   'email',
//   'file',
//   'hidden',
//   'image',
//   'month',
//   'number',
//   'password',
//   'radio',
//   'range',
//   'reset',
//   'search',
//   'submit',
//   'tel',
//   'text',
//   'time',
//   'url',
//   'week',
// ];

// RenderInput.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   error: PropTypes.shape({
//     type: PropTypes.string,
//     message: PropTypes.string,
//     ref: PropTypes.object.isRequired,
//   }),
//   format: PropTypes.oneOf(currencyCodes),
//   type: PropTypes.oneOf([
//     'alpha',
//     'alphanum',
//     'currency',
//     'percentage',
//     ...inputTypes,
//   ]),
//   style: PropTypes.object,
// };

export default RenderInput;

import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  border: 1px solid;
  line-height: 1.5;
  margin: 0.6em 0.2em;
  border-color: ${({ secondary }) =>
    secondary ? 'black' : '#a88734 #9c7e31 #846a29'};
  background-color: ${({ secondary }) => (secondary ? '#f2f3f6' : '#f0c14b')};
  padding: 0.3em 0.6em;
  color: black;
  cursor: pointer;
  ${({ $style }) => $style ?? {}}
`;

export default Button;

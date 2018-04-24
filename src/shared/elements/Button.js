import styled from 'styled-components';

const Button = styled.button`
  font-family: Montserrat;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 0.5rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  transition: all 200ms linear;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default Button;

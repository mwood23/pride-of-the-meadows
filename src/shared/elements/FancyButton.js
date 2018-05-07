import Button from './Button';

const FancyButton = Button.extend`
  background-color: #66bd4d;
  color: white;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #338a1a;
  }
`;

export default FancyButton;

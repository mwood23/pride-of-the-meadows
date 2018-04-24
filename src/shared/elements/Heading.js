import styled from 'styled-components';

const Heading = styled.span`
  height: 26px;
  font-family: Montserrat;
  letter-spacing: 3.2px;
  text-align: ${props => {
    if (props.leftAlign) {
      return 'left';
    }

    return 'center';
  }};
  margin-bottom: 0.5rem;
  display: block;
  text-transform: uppercase;
  color: ${props => props.theme.defaultHeaderColor};
`;

export default Heading;

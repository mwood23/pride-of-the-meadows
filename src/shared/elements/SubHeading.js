import styled from 'styled-components';
import { media } from '../../utils/theme';

const Heading = styled.span`
  font-family: Montserrat;
  letter-spacing: 3.2px;
  text-align: ${props => {
    if (props.leftAlign) {
      return 'left';
    }

    return 'center';
  }};
  display: inline;
  text-transform: uppercase;
  color: ${props => props.theme.defaultHeaderColor};
`;

export default Heading;

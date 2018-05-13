import styled from 'styled-components';
import { media } from '../../utils/theme';

const H2 = styled.h2`
  font-family: Montserrat;
  font-size: 46px;

  ${media.forSmallMediumOnly`
    font-size: 38px;
  `};

  ${media.forSmallOnly`
    font-size: 32px;
  `};
`;

export default H2;

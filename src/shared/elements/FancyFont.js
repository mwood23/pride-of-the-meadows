import styled from 'styled-components';
import { media } from '../../utils/theme';

const FancyFont = styled.span`
  font-family: Sacramento;
  color: ${props => props.theme.potmGreen};
  font-size: ${props => props.fontSize || '58px'};

  ${media.forSmallMediumOnly`
    font-size: 50px;
  `};

  ${media.forSmallOnly`
    font-size: 42px;
  `};
`;

export default FancyFont;

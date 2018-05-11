import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import FancyFont from './FancyFont';

const FancyTitle = styled.span`
  font-family: 'Montserrat';
  font-size: 40px;
  margin-left: 10px;
  color: ${props => props.theme.defaultHeaderColor};

  ${media.forSmallMediumOnly`
    font-size: 36px;
  `};

  ${media.forSmallOnly`
    font-size: 30px;
  `};
`;

const FancyTextCollectionOneLine = ({ titleFont }) => (
  <div>
    <FancyFont>Just</FancyFont>
    <FancyTitle>{titleFont}</FancyTitle>
  </div>
);

export default FancyTextCollectionOneLine;

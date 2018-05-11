import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import FancyFont from './FancyFont';
import H2 from './H2';

const FancyTextCollectionContainer = styled.div`
  line-height: 0.65;
  padding: 1rem 0 2rem;
  text-align: left;

  h2 {
    margin: 0;
  }

  ${media.forSmallMediumOnly`
    padding: 1rem 0;
  `};

  ${media.forSmallOnly`
    padding: 0;
    line-height: 1;

    h2 {
      display: inline;
      margin-left: 5px;
    }
  `};
`;

const FancyTextCollection = ({ titleFont }) => (
  <FancyTextCollectionContainer>
    <FancyFont>Just</FancyFont>
    <H2>{titleFont}</H2>
  </FancyTextCollectionContainer>
);

export default FancyTextCollection;

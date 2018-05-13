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

  &.recipeStyle {
    line-height: 0.5;

    span {
      font-size: 60px;
    }

    h2 {
      font-size: 40px;
    }

    ${media.forSmallOnly`
      padding: 0 0 1rem;
      text-align: center;

      span {
        font-size: 45px;
      }

      h2 {
        font-size: 32px;
      }
  `};
  }
`;

const FancyTextCollection = ({ titleFont, recipeStyle }) => (
  <FancyTextCollectionContainer
    className={`${recipeStyle ? 'recipeStyle' : ''}`}
  >
    <FancyFont>Just</FancyFont>
    <H2>{titleFont}</H2>
  </FancyTextCollectionContainer>
);

export default FancyTextCollection;

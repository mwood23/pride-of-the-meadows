import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import FancyButton from '../shared/elements/FancyButton';
import { Container } from '../shared/blocks/Container';
import { media } from '../utils/theme';

const ThankYouWrapper = Container.extend`
  margin-top: 5rem;

  ${media.forSmallMediumOnly`
    margin-top: 8rem;
  `};
`;

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
`;

const ThankYouText = styled.span`
  font-family: Montserrat;
  font-size: 46px;
  text-align: center;
  margin-bottom: 2rem;

  ${media.forSmallMediumOnly`
    font-size: 38px;
  `};

  ${media.forSmallOnly`
    font-size: 32px;
  `};
`;

const ThankYouPage = () => (
  <ThankYouWrapper>
    <ThankYouContainer>
      <ThankYouText>
        Thank you for reaching out, we'll be in touch in a couple days.
      </ThankYouText>
      <Link to="/recipes/pickles">
        <FancyButton>Check out our pickle recipe</FancyButton>
      </Link>
    </ThankYouContainer>
  </ThankYouWrapper>
);

export default ThankYouPage;

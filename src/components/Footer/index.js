import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import FancyButton from '../../shared/elements/FancyButton';

import brandmark from '../../images/POTM-Brandmark.png';

const FooterWrapper = styled.div``;

const FooterContainer = Container.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem auto 6rem;

  img {
    width: 105px;
    height: 105px;
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Footer = ({ location }) => {
  return (
    <FooterWrapper>
      {/* {location !== '/thank-you' ? (
        <FooterContainer>
          <img src={brandmark} alt="Pride of the Meadows logo" />
          <p>
            Pride of the Meadows is packaged and distributed by Wood's Produce
            company, local to Meadows of Dan, VA. We take great pride in
            supporting local growers and delivering only the most fresh, high
            quality fruits and vegetables.
          </p>
          <a
            href="https://woodsproduce.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FancyButton>Visit Wood's Produce</FancyButton>
          </a>
        </FooterContainer>
      ) : null} */}

      <CopyrightSection>
        <span role="img" aria-label="copyright">
          &copy;
        </span>{' '}
        2018 <span>Pride of the Meadows. All rights reserved.</span>
      </CopyrightSection>
    </FooterWrapper>
  );
};

export default Footer;

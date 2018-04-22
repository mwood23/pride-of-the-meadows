import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import { media } from '../../utils/theme';

import brandmark from '../../images/POTM-Brandmark.png';

const FooterWrapper = styled.div``;

const FooterContainer = Container.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  img {
    width: 105px;
    height: 105px;
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  height: 60px;
  line-height: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <img src={brandmark} />
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium.
        </p>
        <a href="https://woodsproduce.com" />
      </FooterContainer>
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

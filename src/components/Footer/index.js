import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div``;

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

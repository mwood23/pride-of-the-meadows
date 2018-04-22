import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme, media } from '../utils/theme';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const ContentWrapper = styled.div`
  flex: 1;

  ${media.forSmallOnly`
    p {
      font-size: 14px;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.25rem;
    }
  `};
`;

const TemplateWrapper = ({ children, data, location }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Pride of the Meadows"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header data={data} location={location} />
      <ContentWrapper>{children()}</ContentWrapper>
      <Footer />
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/bg.jpeg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

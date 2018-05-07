import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme, media } from '../utils/theme';
import Favicon from '../pages/favicon.png';

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
        title="Pride of the Meadows | Local Fruits and Vegetables from NC and VA"
        meta={[{ name: 'description', content: 'Sample' }]}
      >
        <link rel="icon" href={Favicon} sizes="32x32" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Montserrat|Sacramento"
          rel="stylesheet"
        />
      </Helmet>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Header data={data} location={location} />
        <ContentWrapper>{children()}</ContentWrapper>
        <Footer location={location.pathname} />
      </div>
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

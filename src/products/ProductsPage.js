import React, { Component } from 'react';
import styled from 'styled-components';
import FancyFont from '../shared/elements/FancyFont';
import Heading from '../shared/elements/Heading'
import { Container } from '../shared/blocks/Container';

const ImageContainer = styled.div`
	display: inline-block
  width: 65%;
  margin-left: 4rem;
  img {
    width: 100%;
    align-self: center;
  }
`

const ProductTitle = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 25%
	font-family: 'Montserrat';
  line-height: 0.65;
	font-size: 46px;
  margin-left: 1rem;
	h2 {
		font-family: 'Sacramento';
		font-size: 64px;
    margin-bottom: 0;
		color: #7ed321;
	}
`
const SubHeading = styled.div`
	width: 280px;
  height: 40px;
	margin-top: 18px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.63;
  letter-spacing: 3.2px;
  text-align: left;
  color: #333333;
  color: var(--blackish);
`

const FeaturesList = styled.div`
  display: flex;
  flex-flow: column;
  border: 1px solid #dbdbdb;
  font-family: 'Lato';
  font-size: 14px;
  max-width: 280px;
  height: 100px;
`

export default class ProductsPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>Recipe: {data.markdownRemark.frontmatter.title}</h1>
        <Container>
          <ImageContainer>
            <img alt="product" src={ data.markdownRemark.frontmatter.image } />
          </ImageContainer>
          <ProductTitle>
            <FancyFont>Just</FancyFont><br />
            <span>Jalapeños</span><br />
            <SubHeading leftAlign>CRISP AND SAVORY</SubHeading><br />
            <FeaturesList>
              <div style={{ flexGrow: 1, margin: '0px 10px', borderBottom: '1px solid #dbdbdb' }}>feature one</div>
              <div style={{ flexGrow: 1, margin: '0px 10px', borderBottom: '1px solid #dbdbdb' }}>feature two</div>
              <div style={{ flexGrow: 1, margin: '0px 10px', borderBottom: '1px solid #dbdbdb' }}>feature three</div>
            </FeaturesList>
          </ProductTitle>
        </Container>
      </div>
    );
  };
};

export const query = graphql`
  query ProductsPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        image
      }
    }
  }
`;

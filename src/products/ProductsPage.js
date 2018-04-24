import React, { Component } from 'react';
import styled from 'styled-components';
import FancyFont from '../shared/elements/FancyFont';
import FeatureBox from '../shared/elements/FeatureBox';
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
						<FeatureBox />
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

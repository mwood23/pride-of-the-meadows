import React, { Component } from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Container } from '../shared/blocks/Container';

const RecipePageWrapper = Container.extend`
  display: flex;
  margin-top: 3rem;
`;

const RecipeWrapper = styled.div`
  position: relative;
  width: 75%;

  h1 {
    margin-top: 2.5rem;
  }
`;
const FeaturedProductWrapper = styled.div`
  flex: 1;
`;

const RecipeInfo = styled.div`
  display: flex;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.5;
  font-family: Montserrat;

  span,
  a {
    color: #9b9b9b;
  }

  svg {
    line {
      stroke: #9b9b9b;
    }
  }
`;

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;

    let images;
    if (data.markdownRemark.frontmatter.product_tag === 'pickles') {
      images = data.pickles;
    }
    if (data.markdownRemark.frontmatter.product_tag === 'jalapenos') {
      images = data.jalapenos;
    }
    if (data.markdownRemark.frontmatter.product_tag === 'tomatoes') {
      images = data.caprese;
    }

    return (
      <RecipePageWrapper>
        <RecipeWrapper>
          <Image
            sizes={images.sizes}
            style={{ height: '400px' }}
            imgStyle={{ objectFit: 'cover' }}
          />
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <RecipeInfo>
            <span>Ready in {data.markdownRemark.frontmatter.time_to_make}</span>
            <svg width="40" height="20">
              <line x1="20" y1="20" x2="20" y2="0" />
            </svg>
            <span>Yield: {data.markdownRemark.frontmatter.yield}</span>
            <svg width="40" height="20">
              <line x1="20" y1="20" x2="20" y2="0" />
            </svg>
            <a>Print</a>
          </RecipeInfo>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </RecipeWrapper>

        <FeaturedProductWrapper>test</FeaturedProductWrapper>
      </RecipePageWrapper>
    );
  }
}

export const query = graphql`
  query RecipePostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tag
        time_to_make
        yield
        product_tag
        date(formatString: "MMMM DD YYYY")
      }
    }

    jalapenos: imageSharp(id: { regex: "/jalapeno-poppers.jpg/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }

    caprese: imageSharp(id: { regex: "/caprese.jpg/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }

    pickles: imageSharp(id: { regex: "/pickles.jpg/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

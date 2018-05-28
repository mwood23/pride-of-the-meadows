import React, { Component } from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Container } from '../shared/blocks/Container';
import FancyTextCollection from '../shared/elements/FancyTextCollection';
import SubHeading from '../shared/elements/SubHeading';
import FeatureBox from '../shared/elements/FeatureBox';
import FancyButton from '../shared/elements/FancyButton';
import { media } from '../utils/theme';
import BottomSection from '../components/BottomSection';
import Link from 'gatsby-link';

const RecipePageWrapper = Container.extend`
  display: flex;
  margin-top: 3rem;

  > svg {
    margin: 0 1rem;
  }

  ${media.forSmallMediumOnly`
    flex-direction: column;

    > svg {
      display: none;
    }
  `};

  ${media.forSmallOnly`
    margin-top: ${props => `calc(${props.theme.mobileHeaderHeight} + 2rem)`};
    margin-bottom: 3rem;
  `};
`;

const RecipeWrapper = styled.div`
  position: relative;
  width: 70%;

  ${media.forSmallMediumOnly`
    width: 100%;
  `};

  h1 {
    margin: 2.5rem 0 0 0;
  }
`;
const FeaturedProductWrapper = styled.div`
  flex: 1;

  ${media.forSmallMediumOnly`
    display: flex;
    margin-top: 3rem;
    width: 100%;
    height: 300px;
  `};

  ${media.forSmallOnly`
    margin-top: 1rem;
    height: auto;
  `};

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductImage = styled.img`
  object-fit: contain;

  ${media.forSmallMediumOnly`
    width: 50%;
  `};
`;

const RecipeInfo = styled.div`
  display: flex;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.5;
  font-family: 'Montserrat';
  margin: 1rem 0;

  ${media.forSmallMediumOnly`
    flex: 1;
  `};

  ${media.forSmallOnly`
    flex-direction: column;

    span,
    a {
      margin-bottom: 0.5rem;
    }

    svg {
      display: none;
    }
  `};

  span,
  a {
    color: #9b9b9b;
  }

  svg {
    line {
      stroke: #e9e9e9;
    }
  }
`;

const MarkupContainer = styled.div`
  ul {
    margin-left: 0;
  }
  ol {
    list-style-type: decimal;
    list-style-position: outside;
    margin-left: 30px;

    li {
      padding-left: 1rem;
    }
  }
`;

const FeaturedProductContentContainer = styled.div`
  ${media.forSmallOnly`
    display: flex;
    flex-direction: column;
    align-items: center;
  `};
`;

const LearnMoreButton = FancyButton.extend`
  margin-top: 2rem;
`;

export default class RecipePage extends Component {
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
      <div>
        <RecipePageWrapper>
          <RecipeWrapper>
            <Image
              sizes={images.sizes}
              style={{ height: '400px' }}
              imgStyle={{ objectFit: 'cover' }}
            />
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <RecipeInfo>
              <span>
                Ready in: {data.markdownRemark.frontmatter.time_to_make}
              </span>
              <svg width="40" height="20">
                <line x1="20" y1="20" x2="20" y2="0" />
              </svg>
              <span>Yield: {data.markdownRemark.frontmatter.yield}</span>
              <svg width="40" height="20">
                <line x1="20" y1="20" x2="20" y2="0" />
              </svg>
              <a>Print</a>
            </RecipeInfo>
            <MarkupContainer
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </RecipeWrapper>
          <svg width="40" height="600">
            <line x1="20" y1="600" x2="20" y2="0" stroke="#e9e9e9" />
          </svg>
          <FeaturedProductWrapper>
            <ProductImage
              src={data.markdownRemark.frontmatter.product.image}
              alt={data.markdownRemark.frontmatter.product.id}
            />
            <FeaturedProductContentContainer>
              <FancyTextCollection
                recipeStyle
                titleFont={data.markdownRemark.frontmatter.product.id}
              />
              <SubHeading>
                {data.markdownRemark.frontmatter.product.tagline}
              </SubHeading>
              <FeatureBox
                featureOne={data.markdownRemark.frontmatter.product.featureOne}
                featureTwo={data.markdownRemark.frontmatter.product.featureTwo}
                featureThree={
                  data.markdownRemark.frontmatter.product.featureThree
                }
              />
              <Link to={data.markdownRemark.frontmatter.product.fields.slug}>
                <LearnMoreButton>Learn more</LearnMoreButton>
              </Link>
            </FeaturedProductContentContainer>
          </FeaturedProductWrapper>
        </RecipePageWrapper>
        <BottomSection />
      </div>
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
        image
        product {
          id
          tagline
          image
          featureOne
          featureTwo
          featureThree
          fields {
            slug
          }
        }
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

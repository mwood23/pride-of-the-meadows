import React, { Component } from 'react';
import { Container } from '../shared/blocks/Container';
import ProductImageAndMetaData from '../components/ProductImageAndMetaData';
import ImageBorderBoxSectionOne from '../components/ImageBorderBoxSectionOne';
import ImageBorderBoxSectionTwo from '../components/ImageBorderBoxSectionTwo';

export default class ProductsPage extends Component {
  render() {
    const { data } = this.props;

    console.log(data);
    if (!data) return null;
    return (
      <div>
        <ProductImageAndMetaData
          image={data.markdownRemark.frontmatter.image}
          tagline={data.markdownRemark.frontmatter.tagline}
          featureOne={data.markdownRemark.frontmatter.featureOne}
          featureTwo={data.markdownRemark.frontmatter.featureTwo}
          featureThree={data.markdownRemark.frontmatter.featureThree}
          productName={data.markdownRemark.frontmatter.productName}
        />
        <Container>
          <ImageBorderBoxSectionOne
            nutritionReceiptImage={
              data.markdownRemark.frontmatter.nutritionFacts
            }
            productName={data.markdownRemark.frontmatter.productName}
            productDescription={
              data.markdownRemark.frontmatter.productDescription
            }
            tagline={data.markdownRemark.frontmatter.tagline}
            borderImage={data.infoBoxBorder}
          />
        </Container>
        <ImageBorderBoxSectionTwo
          recipeName={data.markdownRemark.frontmatter.recipeName}
          recipeDate={data.markdownRemark.frontmatter.recipeDate}
          recipeDescription={data.markdownRemark.frontmatter.recipeDescription}
          recipeLink={data.markdownRemark.frontmatter.recipeLink}
          recipeTag={data.markdownRemark.frontmatter.recipeTag}
          backgroundImage={data.featuredRecipe}
          recipeImage={data.markdownRemark.frontmatter.recipeImage}
        />
      </div>
    );
  }
}

export const query = graphql`
  query ProductsPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        productName
        recipeName
        recipeDate
        recipeImage
        recipeLink
        recipeDescription
        recipeTag
        nutritionFacts
        tagline
        image
        alt
        featureOne
        featureTwo
        featureThree
        tag
        productDescription
        date(formatString: "MMMM DD YYYY")
      }
    }

    infoBoxBorder: imageSharp(id: { regex: "/carrots-food-fresh.jpg/" }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }

    featuredRecipe: imageSharp(id: { regex: "/cauliflower-food-fresh.jpg/" }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

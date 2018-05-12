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
          image={data.markdownRemark.frontmatter.product.image}
          tagline={data.markdownRemark.frontmatter.product.tagline}
          featureOne={data.markdownRemark.frontmatter.product.featureOne}
          featureTwo={data.markdownRemark.frontmatter.product.featureTwo}
          featureThree={data.markdownRemark.frontmatter.product.featureThree}
          productName={data.markdownRemark.frontmatter.product.id}
        />
        <Container>
          <ImageBorderBoxSectionOne
            nutritionReceiptImage={
              data.markdownRemark.frontmatter.nutritionFacts
            }
            productName={data.markdownRemark.frontmatter.product.id}
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
        productDescription
        recipeName
        recipeDate
        recipeImage
        recipeLink
        recipeDescription
        recipeTag
        nutritionFacts
        product {
          id
          tagline
          image
          featureOne
          featureTwo
          featureThree
        }
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

import React, { Component } from 'react';
import { ContainerFluid } from '../shared/blocks/Container';
import ProductImageAndMetadata from '../components/ProductImageAndMetadata';
import ImageBorderBoxSectionOne from '../components/ImageBorderBoxSectionOne';
import ImageBorderBoxSectionTwo from '../components/ImageBorderBoxSectionTwo';

import NutritionReceiptImage from '/assets/POTMJalapenos.png';
import BorderImageSectionOne from '/assets/carrots-food-fresh.jpg';
import BorderImageSectionTwo from '/assets/cauliflower-food-fresh.jpg';

export default class ProductsPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <ProductImageAndMetadata 
          image={ data.markdownRemark.frontmatter.image }
          tagline={ data.markdownRemark.frontmatter.tagline }
          featureOne={ data.markdownRemark.frontmatter.featureOne }
          featureTwo={ data.markdownRemark.frontmatter.featureTwo }
          featureThree={ data.markdownRemark.frontmatter.featureThree }
          productName={ data.markdownRemark.frontmatter.productName }
        />
        <ContainerFluid>
          <ImageBorderBoxSectionOne 
            nutritionReceiptImage={ NutritionReceiptImage }
            productName={ data.markdownRemark.frontmatter.productName }
            tagline={ data.markdownRemark.frontmatter.tagline }
            padding={20}
            borderImage={ BorderImageSectionOne }/>
          <ImageBorderBoxSectionTwo 
            recipeName={ data.markdownRemark.frontmatter.recipeName }
            recipeDate={ data.markdownRemark.frontmatter.recipeDate }
            borderImage={ BorderImageSectionTwo }
            padding={65}
            backgroundColor='rgba(103, 190, 77, 0.6)' />
        </ContainerFluid>
      </div>
    );
  };
};

export const query = graphql`
  query ProductsPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featureOne
        featureTwo
        featureThree
        productName
        recipeName
        recipeDate
        tagline
        date(formatString: "MMMM DD YYYY")
        image
      }
    }
  }
`;

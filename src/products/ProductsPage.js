import React, { Component } from 'react';
import { ContainerFluid } from '../shared/blocks/Container';
import BorderImageSectionOne from '../../public/assets/carrots-food-fresh.jpg';
import BorderImageSectionTwo from '../../public/assets/cauliflower-food-fresh.jpg';
import ProductImageAndMetadata from './components/ProductImageAndMetadata';
import ImageBorderBoxSectionOne from './components/ImageBorderBoxSectionOne';
import ImageBorderBoxSectionTwo from './components/ImageBorderBoxSectionTwo';

export default class ProductsPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <ProductImageAndMetadata 
          image={ data.markdownRemark.frontmatter.image }
          featureOne={ data.markdownRemark.frontmatter.featureOne }
          featureTwo={ data.markdownRemark.frontmatter.featureTwo }
          featureThree={ data.markdownRemark.frontmatter.featureThree }
        />
        <ContainerFluid>
          <ImageBorderBoxSectionOne 
            borderImage={ BorderImageSectionOne }/>
          <ImageBorderBoxSectionTwo 
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
        date(formatString: "MMMM DD YYYY")
        image
      }
    }
  }
`;

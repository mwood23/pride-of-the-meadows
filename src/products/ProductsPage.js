import React, { Component } from 'react';
import { ContainerFluid, SectionContainer } from '../shared/blocks/Container';
import InfoBoxWithImageBorder from './components/InfoBoxWithImageBorder';
import ContentOne from './components/ContentOne';
import ContentTwo from './components/ContentTwo';
import BorderImage from '../../public/assets/carrots-food-fresh.jpg';
import BorderImageAlt from '../../public/assets/cauliflower-food-fresh.jpg';
import ProductImageAndMetadata from './components/ProductImageAndMetadata';

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
          <SectionContainer style={{ padding: '0 36px' }}>
            <InfoBoxWithImageBorder 
              padding={20} 
              withNutritionDetails={true}
              borderImage={ BorderImage }>
              <ContentOne />
            </InfoBoxWithImageBorder>
          </SectionContainer>
          <SectionContainer>
            <InfoBoxWithImageBorder 
              padding={65}
              backgroundColor='rgba(103, 190, 77, 0.6)' 
              borderImage={ BorderImageAlt }>
              <ContentTwo />
            </InfoBoxWithImageBorder>
          </SectionContainer>
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

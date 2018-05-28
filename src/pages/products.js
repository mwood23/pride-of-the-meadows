import React, { Component } from 'react';
import { Container } from '../shared/blocks/Container';
import { ImageAndOverview } from '../components/ImageBorderBoxSectionTwo';
import styled from 'styled-components';
import BottomSection from '../components/BottomSection';
import { media } from '../utils/theme';

const ProductsOverviewWrapper = styled.div`
  margin-top: 3rem;

  ${media.forSmallMediumOnly`
    margin-top: calc(${props => props.theme.mobileHeaderHeight} + 2rem)
  `};
`;

const ProductContainer = styled.div`
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  padding: 1rem;
`;

export default class ProductsPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <ProductsOverviewWrapper>
        <Container>
          {data.products.edges.map(({ node }) => (
            <ProductContainer key={node.id}>
              <ImageAndOverview
                name={node.tagline}
                description={node.productDescription}
                link={node.fields.slug}
                image={node.image}
                header={node.id}
                buttonText="Learn more"
              />
            </ProductContainer>
          ))}
        </Container>
        <BottomSection />
      </ProductsOverviewWrapper>
    );
  }
}

export const query = graphql`
  query ProductsOverviewQuery {
    products: allProductYaml {
      edges {
        node {
          id
          tagline
          image
          featureOne
          featureTwo
          featureThree
          productDescription
          fields {
            slug
          }
        }
      }
    }
  }
`;

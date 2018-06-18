import React, { Component } from 'react';
import { Container } from '../shared/blocks/Container';
import ProductImageAndMetaData from '../components/ProductImageAndMetaData';
import ImageBorderBoxSectionOne from '../components/ImageBorderBoxSectionOne';
import ImageBorderBoxSectionTwo from '../components/ImageBorderBoxSectionTwo';
import BottomSection from '../components/BottomSection';

export default class ProductsPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <ProductImageAndMetaData
          image={data.productYaml.image}
          tagline={data.productYaml.tagline}
          featureOne={data.productYaml.featureOne}
          featureTwo={data.productYaml.featureTwo}
          featureThree={data.productYaml.featureThree}
          productName={data.productYaml.id}
        />
        <Container>
          <ImageBorderBoxSectionOne
            nutritionReceiptImage={data.productYaml.nutritionFacts}
            productName={data.productYaml.id}
            productDescription={data.productYaml.productDescription}
            tagline={data.productYaml.tagline}
            borderImage={data.infoBoxBorder}
          />
        </Container>
        {
          data.productYaml.recipeName ? <ImageBorderBoxSectionTwo
          recipeName={data.productYaml.recipeName}
          recipeDate={data.productYaml.recipeDate}
          recipeDescription={data.productYaml.recipeDescription}
          recipeLink={data.productYaml.recipeLink}
          recipeTag={data.productYaml.recipeTag}
          backgroundImage={data.featuredRecipe}
          recipeImage={data.productYaml.recipeImage}
        /> : null
        }

        <BottomSection />
      </div>
    );
  }
}

export const query = graphql`
  query ProductsPostQuery($slug: String!) {
    productYaml(fields: { slug: { eq: $slug } }) {
      id
      tagline
      image
      featureOne
      featureTwo
      featureThree
      productDescription
      recipeName
      recipeDate
      recipeImage
      recipeLink
      recipeDescription
      recipeTag
      nutritionFacts
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

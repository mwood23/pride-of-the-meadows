import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import Image from 'gatsby-image';
import H2 from '../../shared/elements/H2';
import PostTagDateRow from '../../shared/elements/PostTagDateRow';
import Button from '../../shared/elements/Button';
import Link from 'gatsby-link';

const SectionContainer = styled.div`
  position: relative;
  height: 500px;
  padding: 3rem;
  margin-top: 6rem;

  ${media.forSmallOnly`
    height: auto;
    padding: 1.5rem;
    margin-top: 3rem;
  `};
`;

const ContentWrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.potmWhite};
  height: 100%;
  display: flex;
  border-radius: 6px;

  ${media.forSmallOnly`
    flex-direction: column;
  `};

  img {
    height: 100%;
    object-fit: cover;
    width: 350px;
    overflow: hidden;
    border-radius: 6px 0 0 6px;
    margin-bottom: 0;

    ${media.forSmallMediumOnly`
      width: 300px;
    `};

    ${media.forSmallOnly`
      border-radius: 6px 6px 0 0;
      width: 100%;
    `};
  }
`;

const RecipeInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const BackgroundColor = styled.div`
  background-color: rgba(103, 190, 77, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const FeaturedRecipeContainer = styled.div`
  ${media.forSmallOnly`
      display: none;
    `};
`;

const ImageBorderBoxSectionTwo = ({
  recipeName,
  recipeDate,
  recipeDescription,
  recipeLink,
  recipeTag,
  backgroundImage,
  recipeImage
}) => (
  <SectionContainer>
    <Image
      sizes={backgroundImage.sizes}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}
    />
    <BackgroundColor />

    <ContentWrapper>
      <img src={recipeImage} alt={recipeName} />
      <RecipeInfoContainer>
        <FeaturedRecipeContainer>
          <H2>Featured Recipe</H2>
        </FeaturedRecipeContainer>
        <h3>{recipeName}</h3>
        <p>{recipeDescription}</p>
        <PostTagDateRow textOne={recipeTag} textTwo={recipeDate} />
        <div>
          <Link to={recipeLink}>
            <Button>Our Recipe</Button>
          </Link>
        </div>
      </RecipeInfoContainer>
    </ContentWrapper>
  </SectionContainer>
);

export default ImageBorderBoxSectionTwo;

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
  z-index: 10;

  ${media.forSmallOnly`
    flex-direction: column;
  `};

  img {
    height: 100%;
    object-fit: cover;
    font-family: 'object-fit: cover;';
    width: 400px;
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
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  h3 {
    margin-bottom: 1rem;
  }
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

const OurRecipeButtonContainer = styled.div`
  ${media.forSmallOnly`
      display: none;
  `};
`;

const ImageAndOverviewContent = ({
  name,
  date,
  description,
  link,
  tag,
  image,
  header,
  buttonText
}) => (
  <ContentWrapper>
    <img src={image} alt={name} />
    <RecipeInfoContainer>
      <FeaturedRecipeContainer>
        <H2>{header}</H2>
      </FeaturedRecipeContainer>
      <h3>{name}</h3>
      {tag && date ? <PostTagDateRow textOne={tag} textTwo={date} /> : null}

      <p>{description}</p>
      <OurRecipeButtonContainer>
        <Link to={link}>
          <Button>{buttonText}</Button>
        </Link>
      </OurRecipeButtonContainer>
    </RecipeInfoContainer>
  </ContentWrapper>
);

export const ImageAndOverview = ({
  name,
  date,
  description,
  link,
  tag,
  image,
  header,
  buttonText
}) => (
  <ContentWrapper>
    {typeof window !== 'undefined' &&
    window.matchMedia('(min-width: 680px)').matches ? (
      <ImageAndOverviewContent
        name={name}
        date={date}
        description={description}
        link={link}
        tag={tag}
        image={image}
        header={header}
        buttonText={buttonText}
      />
    ) : (
      <Link to={link}>
        <ImageAndOverviewContent
          name={name}
          date={date}
          description={description}
          link={link}
          tag={tag}
          image={image}
          header={header}
          buttonText={buttonText}
        />
      </Link>
    )}
  </ContentWrapper>
);

const ImageBorderBoxSectionTwo = ({
  recipeName,
  recipeDate,
  recipeDescription,
  recipeLink,
  recipeTag,
  backgroundImage,
  recipeImage,
  noBackgroundImage
}) => (
  <SectionContainer>
    {noBackgroundImage ? null : (
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
    )}
    <ImageAndOverview
      name={recipeName}
      date={recipeDate}
      description={recipeDescription}
      link={recipeLink}
      tag={recipeTag}
      image={recipeImage}
      header="Featured Recipe"
      buttonText="Get Recipe"
    />
    <BackgroundColor />
  </SectionContainer>
);

export default ImageBorderBoxSectionTwo;

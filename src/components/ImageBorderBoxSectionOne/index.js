import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import ImageBorderInfoBox from '../ImageBorderInfoBox';
import SubHeading from '../../shared/elements/SubHeading';
import FancyTextCollectionOneLine from '../../shared/elements/FancyTextCollectionOneLine';

const ContentContainer = styled.div`
  text-align: left;
  margin-top: 300px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: calc(280px + 1rem);
  }

  @media (min-width: 992px) {
    margin-left: calc(350px + 4rem);
  }
`;

const NutritionInfoContainer = styled.div`
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 3rem;
  padding: 0.5rem 2rem;
  background-color: ${props => props.theme.potmWhite};
  top: -100px;
  width: 280px;
  height: 425px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    width: 280px;
    height: 525px;
    left: 2rem;
    padding: 0.25rem 1rem;
  }

  @media (min-width: 992px) {
    width: 350px;
    height: 575px;
  }

  img {
    margin: 0;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const ImageBorderBoxSectionOne = props => (
  <ImageBorderInfoBox borderImage={props.borderImage} nutritionStyle>
    <NutritionInfoContainer>
      <img src={props.nutritionReceiptImage} alt="nutrition information" />
    </NutritionInfoContainer>
    <ContentContainer>
      <SubHeading leftAlign>{props.tagline}</SubHeading>
      <FancyTextCollectionOneLine titleFont={props.productName} />
      <p>{props.productDescription}</p>
    </ContentContainer>
  </ImageBorderInfoBox>
);

export default ImageBorderBoxSectionOne;

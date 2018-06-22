import React from 'react';
import styled from 'styled-components';
import FancyFont from '../../shared/elements/FancyFont';
import Button from '../../shared/elements/Button';
import { Container } from '../../shared/blocks/Container';
import FeatureBox from '../../shared/elements/FeatureBox';
import { media } from '../../utils/theme';
import SubHeading from '../../shared/elements/SubHeading';
import FancyTextCollection from '../../shared/elements/FancyTextCollection';

const ProductContainer = Container.extend`
  margin-top: 3rem;
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  ${media.forSmallMediumOnly`
    margin-top: calc(${props => props.theme.mobileHeaderHeight} + 2rem)
  `};
`;

const ProductInfoContainer = styled.div`
  flex: 1;
  margin-left: 1rem;

  /* ${media.forSmallMediumOnly`
    flex-direction: column-reverse;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    font-size: 28px;
    justify-content: center;
    line-height: 35px;
  `}; */
`;

const ImageContainer = styled.div`
  width: 65%;
  margin-left: 4rem;

  ${media.forSmallMediumOnly`
    width: 100%;
    margin: 0;
  `};

  img {
    width: 100%;
    object-fit: contain;
    font-family: 'object-fit: contain;';
  }

  /* ${media.forSmallMediumOnly`
    flex-direction: column;
    width: 100%;
    font-size: 28px;
    justify-content:center;
    line-height: 35px
		margin-left: auto;
    margin-right: auto;
  `}; */
`;

const CtaButton = Button.extend`
  background-color: #66bd4d;
  color: white;
  letter-spacing: 1.5px;
  height: 48px;
  margin-top: 35px;

  &:hover {
    background-color: #338a1a;
  }
`;

const ProductImageAndMetadata = props => (
  <ProductContainer>
    <ImageContainer>
      <img alt="product" src={props.image} />
    </ImageContainer>
    <ProductInfoContainer>
      <FancyTextCollection titleFont={props.productName} />
      <SubHeading leftAlign>{props.tagline}</SubHeading>
      <FeatureBox
        featureOne={props.featureOne}
        featureTwo={props.featureTwo}
        featureThree={props.featureThree}
      />
    </ProductInfoContainer>
  </ProductContainer>
);

export default ProductImageAndMetadata;

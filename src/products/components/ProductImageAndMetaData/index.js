import React from 'react'
import styled from 'styled-components';
import FancyFont from '../../../shared/elements/FancyFont';
import Button from '../../../shared/elements/Button'; 
import { SectionContainer, Container } from '../../../shared/blocks/Container';
import FeatureBox from '../../../shared/elements/FeatureBox';

const ProductTitle = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 25%
	font-family: 'Montserrat';
  line-height: 0.65;
	font-size: 46px;
  margin-left: 1rem;
	h2 {
		font-family: 'Sacramento';
		font-size: 64px;
    margin-bottom: 0;
		color: #7ed321;
	}
`

const ImageContainer = styled.div`
	display: inline-block
  width: 65%;
  margin-left: 4rem;
  img {
    width: 100%;
    align-self: center;
  }
`

const SubHeading = styled.div`
	width: 280px;
  height: 40px;
	margin-top: 18px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.63;
  letter-spacing: 3.2px;
  text-align: left;
  color: #333333;
  color: var(--blackish);
`

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

const ProductImageAndMetadata = ( props ) => (
  <Container style={{ marginTop: '10%' }}>
    <SectionContainer>
      <ImageContainer>
        <img alt="product" src={ props.image } />
      </ImageContainer>
      <ProductTitle>
        <FancyFont>Just</FancyFont><br />
        <span>Jalapeños</span><br />
        <SubHeading leftAlign>CRISP AND SAVORY</SubHeading><br />
        <FeatureBox 
          featureOne={ props.featureOne}
          featureTwo={ props.featureTwo }
          featureThree={ props.featureThree } />
        <CtaButton children="OUR RECIPE" />
      </ProductTitle>
    </SectionContainer>
  </Container>
)

export default ProductImageAndMetadata;

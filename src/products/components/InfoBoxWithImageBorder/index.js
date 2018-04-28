import React from 'react';
import styled from 'styled-components';
import Heading from '../../../shared/elements/Heading';
import BorderImage from '../../../../public/assets/carrots-food-fresh.jpg';
import NutritionReceiptImage from '../../../../public/assets/POTMJalapenos.png';

const ImageContainer = styled.div`
  position: relative;
  height: 500px;
  img {
    width: 100%
  }
`
const NoOverflow = styled.div`
  height: 500px;
  img {
    width: 100%;
  }
  overflow: hidden;
`

const InfoContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 20px
  left: 20px
  width: calc( 100% - 40px );
  height: calc( 100% - 40px );
  background-color: #fff;
`

const NutritionReceipt = styled.div`
  position: absolute;
  z-index: 20;
  left: 100px
  top: -40px;
  background-color: #fff;
  width: 360px;
  height: 573px;
  overflow:visible;
  padding:40px;

  img {
    width: 100%
  }
`

const InfoBoxWithImageBorder = () => (
  <ImageContainer>
    <NoOverflow>
      <img src={BorderImage} />
    </NoOverflow>
    <InfoContainer>
      <Heading>CRISP & SAVORY</Heading>
    </InfoContainer>
    <NutritionReceipt>
      <img src={NutritionReceiptImage} /> 
    </NutritionReceipt>
  </ImageContainer>
);

export default InfoBoxWithImageBorder;



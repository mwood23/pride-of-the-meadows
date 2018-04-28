import React from 'react';
import styled from 'styled-components';
import Heading from '../../../shared/elements/Heading';
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
  background-color: ${ props => props.backgroundColor || '' };
	z-index:5;
  overflow: hidden;
	img {
		position: relative;
		z-index: -10;
	}
`

const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content:flex-end;
	padding-right: 15px;
  z-index: 10;
  top: ${props => props.padding}px;
  left: ${props => props.padding}px;
  width: ${props => `calc( 100% - ${props.padding * 2 }px)`};
  height: ${props => `calc( 100% - ${props.padding * 2 }px)`};
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
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  img {
    width: 100%
  }
`

const InfoBoxWithImageBorder = (props) => (
  <ImageContainer>
    <NoOverflow backgroundColor={ props.backgroundColor }>
      <img src={ props.borderImage } />
    </NoOverflow>
    <InfoContainer padding={props.padding}>
      { props.children }
    </InfoContainer>
    <NutritionReceipt>
      <img src={NutritionReceiptImage} /> 
    </NutritionReceipt>
  </ImageContainer>
);

export default InfoBoxWithImageBorder;

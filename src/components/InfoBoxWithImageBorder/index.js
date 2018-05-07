import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';

const ImageContainer = styled.div`
  position: relative;
  height: 500px;
  img {
    width: 100%
  }
  ${media.forSmallMediumOnly`
    height: 1000px;
    width: 100%;
    font-size: 28px;
    justify-content:center;
    line-height: 35px
    img {
      height: 1000px;
    }
  `}
`

const NoOverflow = styled.div`
  background-color: ${ props => props.backgroundColor || '' };
	z-index:5;
  overflow: hidden;
  height: 500px;
	img {
		position: relative;
		z-index: -10;
	}
  ${media.forSmallMediumOnly`
    height: 1000px;
    width: 100%;
    font-size: 28px;
    justify-content:center;
    line-height: 35px
  `}
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
  ${media.forSmallMediumOnly`
    height: ${ props => 1000 - ( props.padding * 2 ) }px;
    position: absolute;
    display: flex;
    align-items:flex-end;
    padding: 50px;
    z-index: 10;
    top: ${props => props.padding}px;
    left: ${props => props.padding}px;
    width: ${props => `calc( 100% - ${props.padding * 2 }px)`};
    background-color: #fff;
  `}
`

const NutritionReceipt = styled.div`
  position: absolute;
  z-index: 20;
  left: 35px;
  top: -40px;
  background-color: #fff;
  width: 340px;
  height: 573px;
  overflow:visible;
  padding:40px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  img {
    width: 100%
  }
  ${media.forSmallMediumOnly`
    left: calc(50vw - 450px / 2);
		img {
      width: 340px;
      height: 500px;
      margin: 0 auto;
			}
	`}
`

const InfoBoxWithImageBorder = (props) => (
  <ImageContainer>
    <NoOverflow backgroundColor={ props.backgroundColor }>
      <img src={ props.borderImage } />
    </NoOverflow>
    <InfoContainer padding={props.padding}>
      { props.children }
    </InfoContainer>
    {
      props.nutritionReceiptImage
      ? <NutritionReceipt>
          <img alt='' src={ props.nutritionReceiptImage } /> 
        </NutritionReceipt>
      : null
    }
  </ImageContainer>
);

export default InfoBoxWithImageBorder;

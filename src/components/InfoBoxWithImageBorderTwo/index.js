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
      height: 880px;
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
    height: 880px;
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
    height: 750px;
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

const InfoBoxWithImageBorderTwo = (props) => (
  <ImageContainer>
    <NoOverflow backgroundColor={ props.backgroundColor }>
      <img src={ props.borderImage } />
    </NoOverflow>
    <InfoContainer padding={props.padding}>
      { props.children }
    </InfoContainer>
  </ImageContainer>
);

export default InfoBoxWithImageBorderTwo;

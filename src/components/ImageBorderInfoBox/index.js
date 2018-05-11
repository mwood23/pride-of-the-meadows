import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import { media } from '../../utils/theme';
import Image from 'gatsby-image';

const TidyInfoBoxWrapper = Container.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  margin: 4rem auto;

  &.nutritionStyle {
    margin-top: calc(85px + 4rem);

    @media (min-width: 768px) {
      /* max-width: 720px; */
      margin-top: 4rem;
      height: 460px;
    }

    @media (min-width: 992px) {
      height: 500px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageBorderInfoBoxContainer = Container.extend`
  text-align: center;
  padding: 3rem;
  background-color: white;
  position: relative;
  width: 100%;
  height: 100%;

  &.nutritionStyle {
    display: flex;
    align-items: center;

    ${media.forSmallOnly`
      padding: 3rem 1rem 1rem;
    `};
  }
`;

const ImageBorderInfoBox = ({
  borderImage,
  children,
  style,
  nutritionStyle
}) => {
  return (
    <TidyInfoBoxWrapper
      style={style}
      className={`${nutritionStyle ? 'nutritionStyle' : ''}`}
    >
      <ImageWrapper>
        <Image
          sizes={borderImage.sizes}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }}
        />
        <ImageBorderInfoBoxContainer
          className={`${nutritionStyle ? 'nutritionStyle' : ''}`}
        >
          {children}
        </ImageBorderInfoBoxContainer>
      </ImageWrapper>
    </TidyInfoBoxWrapper>
  );
};

export default ImageBorderInfoBox;

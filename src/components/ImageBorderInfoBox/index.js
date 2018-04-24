import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import Heading from '../../shared/elements/Heading';
import Image from 'gatsby-image';

const ImageWrapper = styled.div``;

const TidyInfoBoxWrapper = Container.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  margin: 4rem auto;
`;

const ImageBorderInfoBoxContainer = Container.extend`
  text-align: center;
  padding: 3rem;
  background-color: white;
`;

const ImageBorderInfoBox = ({ borderImage }) => {
  return (
    <TidyInfoBoxWrapper>
      <ImageWrapper>
        <Image
          sizes={borderImage.sizes}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: '-1'
          }}
        />
        <ImageBorderInfoBoxContainer>
          <Heading>Pride of the Meadows</Heading>
          <h2 style={{ fontSize: '40px' }}>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ex ea commodo consequat.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium natus error sit. Visit Woods Produce
          </p>
        </ImageBorderInfoBoxContainer>
      </ImageWrapper>
    </TidyInfoBoxWrapper>
  );
};

export default ImageBorderInfoBox;

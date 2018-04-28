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
  position: relative;
  position: 20;
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
            height: '100%'
          }}
        />
        <ImageBorderInfoBoxContainer>
          <Heading>Pride of the Meadows</Heading>
          <h2 style={{ fontSize: '40px' }}>About Us</h2>
          <p>
            <span style={{ color: 'red' }}>
              Local tastes better. (make this our tagline?)
            </span>{' '}
            We work with farmers local to your area to source the freshest
            product possible, package it in our food safe facility, and send it
            to grocers near you. All of our products are:
            <span style={{ color: 'red' }}>
              Non-GMO?, Hand picked?, Gluten free?, From farm to store in 72
              hours?, Cold from source to your door?
            </span>
          </p>
          <p>
            You can find Pride of the Meadows branded fruits and vegetables in
            Virginia and North Carolina right now at Food Lions and independent
            grocery stores. If we're not in your area yet please{' '}
            <span style={{ color: 'red' }}>contact us </span>
            and we'll see what we can do!
          </p>
        </ImageBorderInfoBoxContainer>
      </ImageWrapper>
    </TidyInfoBoxWrapper>
  );
};

export default ImageBorderInfoBox;

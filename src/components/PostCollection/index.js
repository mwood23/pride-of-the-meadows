import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import { media } from '../../utils/theme';
import Image from 'gatsby-image';

const PostCollectionWrapper = styled.section`
  position: relative;
  margin-top: 2rem;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostCollectionContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
`;

const PostBlurbContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PostBlurb = styled.div`
  height: 150px;
  background-color: white;
  flex: 1;

  &:nth-child(even) {
    margin: 0 2rem;
  }
`;

const PostCollectionHeader = styled.h2`
  font-family: Montserrat;
  font-size: 46px;
`;

const PostCollectionInfo = styled.p`
  font-family: Montserrat;
  font-size: 24px;
  max-width: 50%;
  margin: 0 auto 5rem;
`;

const PostCollection = ({ backgroundImage, posts }) => {
  return (
    <PostCollectionWrapper>
      <Image
        sizes={backgroundImage.sizes}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%'
        }}
      />
      <PostCollectionContainer>
        <PostCollectionHeader>Recipes from our Collection</PostCollectionHeader>
        <PostCollectionInfo>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </PostCollectionInfo>

        <PostBlurbContainer>
          <PostBlurb>test</PostBlurb>
          <PostBlurb>test</PostBlurb>
          <PostBlurb>test</PostBlurb>
        </PostBlurbContainer>
      </PostCollectionContainer>
    </PostCollectionWrapper>
  );
};

export default PostCollection;

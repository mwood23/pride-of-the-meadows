import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import { media } from '../../utils/theme';
import Image from 'gatsby-image';
import H2 from '../../shared/elements/H2';
import PostTagDateRow from '../../shared/elements/PostTagDateRow';

const PostCollectionWrapper = styled.section`
  position: relative;
  margin-top: 2rem;
  height: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostCollectionContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  margin-top: 40px;

  ${media.forSmallOnly`
    margin-top: 70px;
  `};
`;

const PostBlurbContainer = Container.extend`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PostBlurb = styled.a`
  background-color: white;
  display: block;
  width: 33%;
  border-radius: 6px;
  overflow: hidden;
  text-align: left;
  margin: 0 1rem;

  ${media.forSmallOnly`
    width: 100%;

    &:not(:first-child) {
      display: none;
    }
  `};
`;

const PostCollectionInfo = styled.p`
  font-family: Montserrat;
  font-size: 24px;
  max-width: 70%;
  margin: 0 auto 5rem;
  color: ${props => props.theme.defaultHeaderColor};

  ${media.forSmallMediumOnly`
    font-size: 21px;
    margin-bottom: 3rem;
  `};

  ${media.forSmallOnly`
    font-size: 18px;
  `};
`;

const PostImage = styled.img`
  margin-bottom: 0;
`;
const PostHeading = styled.h3`
  margin-bottom: 0.75rem;
`;
const PostTextSection = styled.div`
  padding: 1rem;
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
        <H2>Recipes from our Collection</H2>
        <PostCollectionInfo>
          From our table to yours, these are our favorites.
        </PostCollectionInfo>

        <PostBlurbContainer>
          {posts.map(post => (
            <PostBlurb key={post.node.id} href={post.node.fields.slug}>
              <PostImage
                src={post.node.frontmatter.image}
                alt={post.node.frontmatter.alt}
              />
              <PostTextSection>
                <PostHeading>{post.node.frontmatter.title}</PostHeading>
                <PostTagDateRow
                  textOne={post.node.frontmatter.tag}
                  textTwo={post.node.frontmatter.date}
                />
                <p>{post.node.excerpt}&hellip;</p>
              </PostTextSection>
            </PostBlurb>
          ))}
        </PostBlurbContainer>
      </PostCollectionContainer>
    </PostCollectionWrapper>
  );
};

export default PostCollection;

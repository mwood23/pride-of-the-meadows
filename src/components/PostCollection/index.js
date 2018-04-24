import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import { media } from '../../utils/theme';
import Image from 'gatsby-image';

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
`;

const PostBlurbContainer = Container.extend`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PostBlurb = styled.a`
  background-color: white;
  display: block;
  flex: 1;
  border-radius: 6px;
  overflow: hidden;
  text-align: left;

  &:nth-child(even) {
    margin: 0 2rem;
  }

  @media (max-width: 767px) {
    &:not(:first-child) {
      display: none;
    }
  }
`;

const PostCollectionHeader = styled.h2`
  font-family: Montserrat;
  font-size: 46px;

  ${media.forSmallMediumOnly`
    font-size: 38px;
  `};

  ${media.forSmallOnly`
    font-size: 32px;
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
const PostTagDateRow = styled.div`
  margin-bottom: 0.75rem;
  font-family: Montserrat;
  font-size: 0.9rem;

  span:first-child {
    text-transform: uppercase;
    font-weight: bold;
  }

  span:last-child {
    color: #9b9b9b;
  }
`;

const PostCollection = ({ backgroundImage, posts }) => {
  console.log(posts);
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
          {posts.map(post => (
            <PostBlurb key={post.node.id} href={post.node.fields.slug}>
              <PostImage
                src={post.node.frontmatter.image}
                alt={post.node.frontmatter.alt}
              />
              <PostTextSection>
                <PostHeading>{post.node.frontmatter.title}</PostHeading>
                <PostTagDateRow>
                  <span>{post.node.frontmatter.tag} </span>
                  <span>/ {post.node.frontmatter.date}</span>
                </PostTagDateRow>
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

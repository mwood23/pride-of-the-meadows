import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import ReactSwipe from 'react-swipe';
import SubHeading from '../../shared/elements/SubHeading';
import Button from '../../shared/elements/Button';
import Link from 'gatsby-link';
import FancyTextCollectionOneLine from '../../shared/elements/FancyTextCollectionOneLine';

const SwipeWrapper = styled.div`
  position: relative;
  margin: 0 3rem;
  padding: 0 4rem;
  min-height: 400px;
  display: flex;
  align-items: center;

  ${media.forSmallOnly`
    margin: 0 15px;
  `};
`;

const TextImageRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    outline-offset: -3px;

    button {
      outline-offset: -3px;
    }
  }

  @media (max-width: 880px) {
    flex-direction: column-reverse;
  }
`;

const TextContainer = styled.div`
  width: 50%;

  ${media.forSmallMediumOnly`
    width: 80%;
  `};

  ${media.forSmallOnly`
    width: 100%;
  `};
`;

const ImageContainer = styled.div`
  width: 50%;
  margin-left: 2rem;

  ${media.forSmallMediumOnly`
    margin-left: 0;
    width: 80%;
  `};

  ${media.forSmallOnly`
    width: 100%;
  `};
`;

const SwipeNavButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  top: 50%;
  transform: translateY(-50%);
`;

const PrevButton = SwipeNavButton.extend`
  left: 0;

  svg {
    cursor: pointer;
  }
`;

const NextButton = SwipeNavButton.extend`
  position: absolute;
  right: 0;

  svg {
    cursor: pointer;
  }
`;

export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);

    this.goToNext = this.goToNext.bind(this);
    this.goToPrevious = this.goToPrevious.bind(this);
  }

  goToNext() {
    this.reactSwipe.next();
  }

  goToPrevious() {
    this.reactSwipe.prev();
  }

  render() {
    return (
      <SwipeWrapper>
        <PrevButton onClick={this.goToPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            transform="rotate(180)"
          >
            <g fill="#000" fillRule="nonzero">
              <path d="M15 .6A14.403 14.403 0 0 1 29.4 15 14.403 14.403 0 0 1 15 29.4 14.403 14.403 0 0 1 .6 15 14.412 14.412 0 0 1 15 .6zm0-.6a15 15 0 1 0 0 30 15 15 0 0 0 0-30z" />
              <path d="M13.636 20.339l-.416-.429L17.986 15l-4.766-4.91.416-.429L18.814 15z" />
            </g>
          </svg>
        </PrevButton>
        <ReactSwipe
          // swipeOptions={{
          //   continuous: false
          // }}
          ref={reactSwipe => (this.reactSwipe = reactSwipe)}
        >
          {this.props.products.map((product, index) => (
            <TextImageRowWrapper key={product.node.id}>
              <TextContainer>
                <SubHeading leftAlign>{product.node.tagline}</SubHeading>
                <FancyTextCollectionOneLine titleFont={product.node.id} />
                <p>{product.node.productDescription}</p>
                <Link
                  to={product.node.fields.slug}
                  aria-label={`See more details about ${product.node.id}`}
                >
                  <Button>Learn more</Button>
                </Link>
              </TextContainer>
              <ImageContainer>
                <img src={product.node.image} alt={product.node.id} />
              </ImageContainer>
            </TextImageRowWrapper>
          ))}
        </ReactSwipe>
        <NextButton onClick={this.goToNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <g fill="#000" fillRule="nonzero">
              <path d="M15 .6A14.403 14.403 0 0 1 29.4 15 14.403 14.403 0 0 1 15 29.4 14.403 14.403 0 0 1 .6 15 14.412 14.412 0 0 1 15 .6zm0-.6a15 15 0 1 0 0 30 15 15 0 0 0 0-30z" />
              <path d="M13.636 20.339l-.416-.429L17.986 15l-4.766-4.91.416-.429L18.814 15z" />
            </g>
          </svg>
        </NextButton>
      </SwipeWrapper>
    );
  }
}

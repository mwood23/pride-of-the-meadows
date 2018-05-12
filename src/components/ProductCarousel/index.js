import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import ReactSwipe from 'react-swipe';
import { Container } from '../../shared/blocks/Container';
import FancyFont from '../../shared/elements/FancyFont';
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
`;

const NextButton = SwipeNavButton.extend`
  position: absolute;
  right: 0;
`;

const testProducts = [
  {
    name: 'Jalapenos',
    intro_blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'http://www.sambrailo.com/wp-content/uploads/2015/10/Clamshell_20-34-3100_1-Pt-RunRite-tomatoes.jpg',
    alt: 'test',
    tagline: 'Crisp and savory',
    link: '/'
  },
  {
    name: 'Tomatoes',
    intro_blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://media.istockphoto.com/photos/tomato-picture-id155157132',
    alt: 'test',
    tagline: 'Test',
    link: '/'
  },
  {
    name: 'Pickles',
    intro_blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'https://media.istockphoto.com/photos/cucumbers-pickles-picture-id95756257',
    alt: 'test',
    tagline: 'Crispy and fresh',
    link: '/'
  }
];

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
    console.log(this.props.products);
    return (
      <SwipeWrapper>
        <PrevButton onClick={this.goToPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <g fill="#000" fillRule="nonzero">
              <path d="M13.5.54A12.962 12.962 0 0 0 .54 13.5 12.962 12.962 0 0 0 13.5 26.46 12.962 12.962 0 0 0 26.46 13.5 12.97 12.97 0 0 0 13.5.54zm0-.54a13.5 13.5 0 1 1 0 27 13.5 13.5 0 0 1 0-27z" />
              <path d="M14.87 18.305l.375-.386-4.29-4.419 4.29-4.42-.374-.385-4.66 4.805z" />
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
            <TextImageRowWrapper key={product.node.frontmatter.title}>
              <TextContainer>
                <SubHeading leftAlign>
                  {product.node.frontmatter.tagline}
                </SubHeading>
                <FancyTextCollectionOneLine
                  titleFont={product.node.frontmatter.productName}
                />
                <p>{product.node.frontmatter.productDescription}</p>
                <Link to={product.node.fields.slug}>
                  <Button>Learn more</Button>
                </Link>
              </TextContainer>
              <ImageContainer>
                <img
                  src={product.node.frontmatter.image}
                  alt={product.node.frontmatter.productName}
                />
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

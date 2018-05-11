import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import { media } from '../../utils/theme';
import SubHeading from '../../shared/elements/SubHeading';
import FancyFont from '../../shared/elements/FancyFont';
import placeholder from '../../images/placeholder.jpeg';
import Button from '../../shared/elements/Button';

const TextImageRowWrapper = Container.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* padding: 4rem 0; */}

  // prettier-ignore
  ${media.forSmallOnly`
    padding: 0;
  `}
`;

const TextContainer = styled.div`
  width: 50%;
`;

const ImageContainer = styled.div`
  width: 50%;
  margin-left: 2rem;
`;

const TextImageRow = () => {
  return (
    <TextImageRowWrapper>
      <TextContainer>
        <SubHeading leftAlign>Crisp and Savory</SubHeading>
        <FancyFont>Just</FancyFont>
        <span
          style={{
            fontFamily: 'Montserrat',
            fontSize: '40px',
            marginLeft: '10px'
          }}
        >
          Jalapenos
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, ex ea commodo consequat.
        </p>
        <p>
           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium natus error sit.
        </p>
        <Button>Test</Button>
      </TextContainer>
      <ImageContainer>
        <img src={placeholder} alt="placeholder" />
      </ImageContainer>
    </TextImageRowWrapper>
  );
};

export default TextImageRow;

import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { media } from "../../utils/theme";
import Heading from "../../shared/elements/Heading";
import FancyFont from "../../shared/elements/FancyFont";
import placeholder from "../../images/placeholder.jpeg";

const TextImageRowWrapper = Container.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* padding: 4rem 0; */}

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
        <Heading leftAlign>Crisp and Savory</Heading>
        <FancyFont>Just</FancyFont>
        <span
          style={{
            fontFamily: "Montserrat",
            fontSize: "40px",
            marginLeft: "10px"
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
      </TextContainer>
      <ImageContainer>
        <img src={placeholder} alt="placeholder" />
      </ImageContainer>
    </TextImageRowWrapper>
  );
};

export default TextImageRow;

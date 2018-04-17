import React from "react";
import { Container } from "../Container";
import { media } from "../../utils/theme";
import Heading from "../../shared/elements/Heading";

const TidyInfoBoxWrapper = Container.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  // prettier-ignore
  ${media.forSmallOnly`
    padding: 0;
  `}
`;

const TidyInfoBoxContainer = Container.extend`
  text-align: center;
  border: solid 1px rgba(151, 151, 151, 0.23);
  padding: 3rem;

  // prettier-ignore
  ${media.forSmallOnly`
    border: none;
  `}
`;

const TidyInfoBox = () => {
  return (
    <TidyInfoBoxWrapper>
      <TidyInfoBoxContainer>
        <Heading>Pride of the Meadows</Heading>
        <h2 style={{ fontSize: "40px" }}>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, ex ea commodo consequat.
        </p>
        <p>
           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium natus error sit. Visit Woods Produce
        </p>
      </TidyInfoBoxContainer>
    </TidyInfoBoxWrapper>
  );
};

export default TidyInfoBox;

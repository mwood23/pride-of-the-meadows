import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import Img from "gatsby-image";

const IconBlurbWrapper = styled.section`
  background-color: #fbf9ec;
  position: relative;
`;

const IconBlurbContainer = Container.extend`
  display: flex;
  background-color: #fbf9ec;
  width: 100%;
  padding: 3rem;
  position: relative;
`;

const Blurb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  width: 25%;

  &:nth-child(even) {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const IconBlurbRow = ({ blurbs, badge }) => {
  console.log(blurbs, badge);

  return (
    <IconBlurbWrapper>
      <IconBlurbContainer>
        {blurbs.map(item => (
          <Blurb key={item.header}>
            <img src={item.icon_image} alt="test" />
            <h3>{item.header}</h3>
            <p>{item.text}</p>
          </Blurb>
        ))}
        <Img
          style={{
            width: "300px",
            height: "300px",
            display: "block",
            position: "absolute",
            top: "-35px",
            right: "20px"
          }}
          sizes={badge.sizes}
        />
      </IconBlurbContainer>
    </IconBlurbWrapper>
  );
};

export default IconBlurbRow;

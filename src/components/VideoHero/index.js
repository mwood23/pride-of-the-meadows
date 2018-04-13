import React from "react";
import styled from "styled-components";

const VideoHeroWrapper = styled.section`
  height: 55vh;
  background-image: url("https://images.pexels.com/photos/134877/pexels-photo-134877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const VideoHero = ({ video }) => <VideoHeroWrapper />;

export default VideoHero;

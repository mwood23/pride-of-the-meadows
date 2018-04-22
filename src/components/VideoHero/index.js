import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import badge from '../../images/POTM-Bubble.png';
import ReactPlayer from 'react-player';

const VideoHeroWrapper = styled.section`
  height: 75vh;
  overflow: hidden;
`;

const BadgeImage = styled.div`
  display: none;

  // prettier-ignore
  ${media.forSmallMediumOnly`
    display: block;
    position: absolute;
    right: 10%;
    width: 25%;
    bottom: -20px;
    z-index: 10;
  `}

  // prettier-ignore
  ${media.forSmallOnly`
    width: 37%;
    right: 5%;
  `}

  img {
    object-fit: contain;
    margin: 0;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoHero = ({ video }) => (
  <VideoHeroWrapper>
    <VideoContainer>
      <ReactPlayer
        url="https://streamable.com/nv3fb"
        playing
        loop
        preload
        width="100%"
        height="initial"
        controls={false}
        config={{ attributes: { autoPlay: true } }}
      />
    </VideoContainer>
    <BadgeImage>
      <img src={badge} alt="Fresh from the Vine and Hand Picked Badge" />
    </BadgeImage>
  </VideoHeroWrapper>
);

export default VideoHero;

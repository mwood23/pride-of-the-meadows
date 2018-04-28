import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { media } from '../../utils/theme';
import badge from '../../images/POTM-Bubble.png';
import ReactPlayer from 'react-player';

const ComponentWrapper = styled.section`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  ${'' /* background-image: linear-gradient(
    to bottom,
    #0a301e,
    #103524,
    #163a2a,
    #1c4030,
    #224536
  ); */} background-image: linear-gradient(to bottom, #102219, #10231a, #0f251b, #0f261c, #0e281d);
  opacity: 0.4;
  z-index: 10;
`;

const OverlayText = styled.h1`
  position: absolute;
  color: white;
  width: 100%;
  font-size: 65px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  text-align: center;
`;

const VideoHeroWrapper = styled.div`
  height: 625px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1345px) {
    height: 625px;
  }
  @media (max-width: 1125px) {
    height: 525px;
  }
  @media (max-width: 950px) {
    height: 425px;
  }
  @media (max-width: 780px) {
    height: 425px;
  }
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

  @media (max-width: 780px) {
    display: none;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoHero = ({ mobileHeroImage }) => (
  <ComponentWrapper>
    <OverlayText>Local tastes better.</OverlayText>
    <Overlay />
    <VideoHeroWrapper>
      {typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 680px)').matches ? (
        <VideoContainer>
          <ReactPlayer
            url="https://streamable.com/nv3fb"
            playing
            loop
            preload
            width="100%"
            height="initial"
            controls={false}
            onStart={e => console.log('on start')}
            config={{ attributes: { autoPlay: true } }}
          />
        </VideoContainer>
      ) : (
        <Image
          sizes={mobileHeroImage.sizes}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }}
        />
      )}
    </VideoHeroWrapper>
    <BadgeImage>
      <img src={badge} alt="Fresh from the Vine and Hand Picked Badge" />
    </BadgeImage>
  </ComponentWrapper>
);

export default VideoHero;

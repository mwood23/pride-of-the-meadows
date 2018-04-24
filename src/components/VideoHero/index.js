import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { media } from '../../utils/theme';
import badge from '../../images/POTM-Bubble.png';
import ReactPlayer from 'react-player';

const ComponentWrapper = styled.section`
  position: relative;
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
    <VideoHeroWrapper>
      {window.matchMedia('(min-width: 781px)').matches ? (
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

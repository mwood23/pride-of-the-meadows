import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import badge from '../../images/POTM-Bubble.png';

const VideoHeroWrapper = styled.section`
  height: 55vh;
  background-image: url('https://images.pexels.com/photos/134877/pexels-photo-134877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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

const VideoHero = ({ video }) => (
  <VideoHeroWrapper>
    <BadgeImage>
      <img src={badge} alt="Fresh from the Vine and Hand Picked Badge" />
    </BadgeImage>
  </VideoHeroWrapper>
);

export default VideoHero;

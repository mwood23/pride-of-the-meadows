import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import { media } from '../../utils/theme';

import badge from '../../images/POTM-Bubble-USA.svg';

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

  ${media.forSmallMediumOnly`
    padding: 3rem 0;
  `}

  // prettier-ignore
  ${media.forSmallOnly`
    flex-direction: column;
    padding: 3rem 15px;
  `}
`;

const Blurb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  width: 25%;

  img {
    height: 60px;
  }

  ${media.forSmallMediumOnly`
    width: 33%;
  `};

  ${media.forSmallOnly`
    width: 100%;
    padding: 2rem 0;
    text-align: center;
  `};

  &:nth-child(even) {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);

    // prettier-ignore
    ${media.forSmallOnly`
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    `}
  }
`;

const BadgeImage = styled.div`
  position: absolute;
  top: -50px;
  right: 10%;
  width: 20%;
  z-index: 20;
  max-width: 270px;

  // prettier-ignore
  ${media.forSmallMediumOnly`
    display: none;
  `}

  img {
    object-fit: contain;
    margin: 0;
  }
`;

const IconBlurbRow = ({ blurbs }) => {
  console.log(blurbs);
  return (
    <IconBlurbWrapper>
      <IconBlurbContainer>
        {blurbs.map(item => (
          <Blurb key={item.header}>
            <img src={item.icon_image} alt={item.text} />
            <h3>{item.header}</h3>
            <p>{item.text}</p>
          </Blurb>
        ))}
      </IconBlurbContainer>
      <BadgeImage>
        <img src={badge} alt="Fresh from the Vine and Hand Picked Badge" />
      </BadgeImage>
    </IconBlurbWrapper>
  );
};

export default IconBlurbRow;

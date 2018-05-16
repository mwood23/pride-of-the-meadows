import React from 'react';
import styled from 'styled-components';
import { media } from '../../../utils/theme';

const Hb1 = styled.div``;
const Hb2 = styled.div``;
const Hb3 = styled.div``;

const HamburgerWrapper = styled.div`
  position: absolute;
  box-sizing: initial;
  left: 0;
  top: 0;
  margin: 11px 10px 5px;
  width: 20px;
  height: 20px;
  padding: 12px 15px 12px;
  line-height: ${props => props.theme.mobileHeaderHeight};;
  text-align: center;
  z-index: 100;
  cursor: pointer;
  transition: opacity 250ms ease;

  // prettier-ignore
  ${media.forLargeUp`
    display: none;
  `}

  > div {
    position: relative;
    background-color: #d8c8ae;
    width: 20px;
    height: 3px;
    border-width: 1px 0;
    margin: 0 auto 3px;
    padding: 0;
    border-radius: 1px;
    font-size: 1px;
    transition: all 200ms ease;
    transform-origin: 0 0;
  }

  &[open] {
    ${Hb1} {
      transform: translate(4px, -1px) rotate(45deg);
    }

    ${Hb2} {
      opacity: 0;
    }

    ${Hb3} {
      transform: translate(2px, 1px) rotate(-45deg);
    }
  }
}
`;

export const Hamburger = props => (
  <HamburgerWrapper open={props.open} {...props}>
    <Hb1 />
    <Hb2 />
    <Hb3 />
  </HamburgerWrapper>
);

export default Hamburger;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import { media } from "../../utils/theme";

import logo from "../../images/POTM-Logo-Main.svg";
import mobileLogo from "../../images/POTM-Logo-Mobile.svg";

const HeaderDesktopImage = styled(Link)`
  height: 100%;

  // prettier-ignore
  ${media.forSmallOnly`
      display: none;
    `}

    img {
      height: 100%;
      object-fit: contain;
      margin: 0 0 0 2rem;
      padding: 0.25rem 0;
    }
`;

const HeaderMobileImage = styled(Link)`
  height: 100%;
  display: block;
  margin: auto;

  // prettier-ignore
  ${media.forMediumUp`
    display: none;
  `}

  img {
    height: 100%;
    object-fit: contain;
    margin: 0;
    padding: 0.5rem 0;
  }
`;

const HeaderWrapper = styled.div`
  height: ${props => props.theme.desktopHeaderHeight};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  // prettier-ignore
  ${media.forSmallOnly`
    height: ${props => props.theme.mobileHeaderHeight};
  `}
`;

const MainNav = styled.nav`
  height: 100%;

  // prettier-ignore
  ${media.forSmallOnly`
      display: none;
    `}

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    height: 100%;

    li {
      margin: 0;
      height: 100%;
      border-left: 1px solid rgba(0, 0, 0, 0.1);

      a {
        height: 100%;
        display: block;
        line-height: ${props => props.theme.desktopHeaderHeight};
        padding: 0 2rem;
        transition: all 0.2s linear;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;

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
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 250ms ease;

  // prettier-ignore
  ${media.forMediumUp`
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

const Hamburger = props => (
  <HamburgerWrapper open={props.open} {...props}>
    <Hb1 />
    <Hb2 />
    <Hb3 />
  </HamburgerWrapper>
);

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false
    };

    this.onMobileNavClick = this.onMobileNavClick.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
  }

  onMobileNavClick() {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  }

  onNavClick() {
    this.setState({
      mobileNavOpen: false
    });
  }

  render() {
    return (
      <HeaderWrapper
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderDesktopImage to="/">
          <img src={logo} alt="Test" />
        </HeaderDesktopImage>
        <Hamburger
          onClick={this.onMobileNavClick}
          open={this.state.mobileNavOpen}
        />
        <HeaderMobileImage to="/">
          <img src={mobileLogo} alt="Test" />
        </HeaderMobileImage>
        <MainNav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Recipes</Link>
            </li>
          </ul>
        </MainNav>
      </HeaderWrapper>
    );
  }
}

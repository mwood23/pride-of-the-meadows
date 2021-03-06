import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import { media } from '../../utils/theme';
import onClickOutside from 'react-onclickoutside';
import logo from '../../images/POTM-Logo-Main.svg';
import mobileLogo from '../../images/POTM-Logo-Mobile.svg';

const HeaderDesktopImage = styled(Link)`
  height: 100%;
  // prettier-ignore
  ${media.forSmallMediumOnly`
    display: none;
  `}

  img {
    height: 100%;
    object-fit: contain;
    font-family: 'object-fit: contain;';
    margin: 0 0 0 2rem;
    padding: 0.25rem 0;
  }
`;

const HeaderMobileImage = styled.div`
  height: 100%;
  display: block;
  text-align: center;

  // prettier-ignore
  ${media.forLargeUp`
    display: none;
  `}

  img {
    height: 100%;
    object-fit: contain;
    font-family: 'object-fit: contain;';
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
  z-index: 30;

  // prettier-ignore
  ${media.forSmallMediumOnly`
    height: ${props => props.theme.mobileHeaderHeight};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
  `}
`;

const MainNav = styled.nav`
  height: 100%;

  // prettier-ignore
  ${media.forSmallMediumOnly`
    position: absolute;
    transition: all 0.3s;
    z-index: -1;
    top: 0;
    transform: ${props =>
      props.open ? 'translateY(60px)' : 'translateY(-100%)'};
    visibility: ${props => (props.open ? 'visible' : 'hidden')};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;
    width: 100%;
    height: auto;

    ul {
      display: flex;
      flex-direction: column;

      li {
        border: none;
        background-color: #fff;
        width: 100%;
        height: auto;

        a {
          height: auto;
        }
      }
    }
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

      ${media.forSmallMediumOnly`
        border: none;
        background-color: #fff;
        width: 100%;
        height: auto;
      `}

      a {
        height: 100%;
        display: block;
        line-height: ${props => props.theme.desktopHeaderHeight};
        padding: 0 2rem;
        transition: all 0.2s linear;
        font-family: 'Montserrat',serif;
        letter-spacing: 1.5px;
        font-weight: 500;
        color: ${props => props.theme.defaultHeaderColor};

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;

const MobileNavContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;

  // prettier-ignore
  ${media.forLargeUp`
    display: none;
  `}
`;

const WoodsProduceLink = styled.a`
  ${media.forLargeUp`
    line-height: 1.4 !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
  `};

  span {
    font-weight: 500;
    color: ${props => props.theme.defaultHeaderColor};
  }
`;

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false
    };

    this.onMobileNavClick = this.onMobileNavClick.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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

  handleClickOutside() {
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
          <img src={logo} alt="Pride of the Meadows logo" />
        </HeaderDesktopImage>
        <MobileNavContainer>
          <Hamburger
            onClick={this.onMobileNavClick}
            open={this.state.mobileNavOpen}
          />
          <HeaderMobileImage>
            <Link to="/" onClick={this.onNavClick}>
              <img src={mobileLogo} alt="Pride of the Meadows logo" />
            </Link>
          </HeaderMobileImage>
        </MobileNavContainer>
        <MainNav open={this.state.mobileNavOpen}>
          <ul>
            <li>
              <Link to="/" onClick={this.onNavClick}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={this.onNavClick}>
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={this.onNavClick}>
                CONTACT
              </Link>
            </li>
            <li>
              <WoodsProduceLink
                href="https://woodsproduce.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>PACKED BY </span>
                <span>WOOD'S PRODUCE</span>
              </WoodsProduceLink>
            </li>
          </ul>
        </MainNav>
      </HeaderWrapper>
    );
  }
}

export default onClickOutside(Header);

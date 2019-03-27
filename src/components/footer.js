import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <BlocksContainer>
        <Block>
          <Title>ABOUT EVENT</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit aliquid
            quibusdam fugit architecto.
          </p>
        </Block>
        <Block>
          <Title>QUICK LINKS</Title>
          <MenuList>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Speakers</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </MenuList>
        </Block>
        <Block>
          <Title>CONNECT WITH US</Title>
          <SocialList>
            <li>
              <Link to="/">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
          </SocialList>
        </Block>
      </BlocksContainer>
      <Copyright>
        Copyright © 2019 All rights reserved | This template is made with love
        by Amstergo
      </Copyright>
    </FooterContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.div`
  padding: 128px 0;
  background-color: #1b1d24;
`

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 15px;

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 960px) {
    max-width: 720px;
  }

  @media (max-width: 720px) {
    max-width: 540px;
  }
`

const BlocksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2em;
  justify-items: center;
  margin-bottom: 3em;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2em;
    justify-items: start;
  }
`

const Block = styled.div`
  font-size: 16px;
`

const Title = styled.h2`
  font-size: 16px;
  color: #818186;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-weight: 400;
`

const MenuList = styled.ul`
  margin: 0;

  li {
    position: relative;
    z-index: 1;

    a {
      font-weight: 300;

      &:after {
        content: "";
        width: 45%;
        height: 100%;
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transform: matrix(1.2, 0, 0.5, 1.2, 50, 0) scaleX(0);
        transition: 0.3s;
      }

      &:hover {
        background: linear-gradient(45deg, white 33%, #ff0000 66%, #ff5733);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &:hover:after {
        transform: matrix(1.2, 0, 0.5, 1.2, 50, 0) scaleX(1);
      }
    }
  }
`

const rotate = keyframes`
  from {
    transform: rotate(30deg);
  }

  10% {
    transform: rotate(20deg);
  }

  20% {
    transform: rotate(10deg);
  }

  30% {
    transform: rotate(0deg);
  }

  40% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(-20deg);
  }

  60% {
    transform: rotate(-30deg);
  }

  70% {
    transform: rotate(-20deg);
  }

  90% {
    transform: rotate(-10deg);
  }

  to {
    transform: rotate(0deg);
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-left: 0;

  li {
    &:hover {
      animation: ${rotate} 0.2s linear;
    }

    a {
      color: white;
      transition: 0.2s;

      &:hover {
        color: #ff5733;
      }
    }
  }
`

const Copyright = styled.p`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 3em;
  text-align: center;
  font-size: 16px;
`

export default Footer

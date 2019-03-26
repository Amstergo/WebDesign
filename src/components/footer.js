import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
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
    a {
      font-weight: 300;

      &:hover {
        color: #ff5733;
      }
    }
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-left: 0;

  li {
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
`

export default Footer

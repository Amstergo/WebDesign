import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Headroom from "react-headroom"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Logo>
        <Link to="/">
          {siteTitle}
          <span>shop</span>
        </Link>
      </Logo>
      <Menu>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">about us</Link>
        </li>
        <li>
          <Link to="/">speakers</Link>
        </li>
        <li>
          <Link to="/">news</Link>
        </li>
        <li>
          <Link to="/">contacts</Link>
        </li>
        <li>
          <Link to="/">buy tickets</Link>
        </li>
      </Menu>
    </HeaderContainer>
  </HeaderWrapper>
)

const HeaderWrapper = styled(Headroom)``

const Logo = styled.h1`
  margin: 0;
  font-size: 32px;

  a {
    font-weight: 400;
    color: white;

    span {
      color: #ff5733;
    }
  }
`

const HeaderContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-template-rows: 100px;
  align-items: center;
  padding: 0 15px;
`

const Menu = styled.ul`
  display: flex;
  margin: 0;
  justify-self: end;

  li {
    margin: 0;
    padding: 0 13px;
    text-transform: uppercase;
    font-size: 14px;

    a {
      color: white;
      letter-spacing: 0.1em;
      transition: 0.3s;
      position: relative;
      overflow: hidden;

      &:after {
        content: "";
        position: absolute;
        bottom: -7px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(to right, #c70039, #ff5733 70%);
        transition: 0.3s all ease-in-out;
      }

      &:hover {
        color: #ff5733;
      }

      &:hover:after {
        width: 100%;
      }
    }

    &:last-child {
      padding-left: 15px;
      padding-right: 15px;

      a {
        border: 2px solid #3f4046;
        padding: 12px 20px;
        color: #ff5733;
        transition: 0.3s;

        &:hover {
          color: white;
        }

        &:hover:after {
          color: white;
          display: none;
        }
      }
    }
  }
`

export default Header

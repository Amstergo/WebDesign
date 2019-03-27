import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"

const Button = () => (
  <ButtonWrapper to="/">
    <span>buy tickets</span>
  </ButtonWrapper>
)

const rainbow = keyframes`
  from {
    background-position:left
  }
  50% {
    background-position:right
  }
  to {
    background-position:left
  }
`

const ButtonWrapper = styled(Link)`
  text-transform: uppercase;
  color: #fff;
  background: #3f4046;
  padding: 16px 30px;
  display: inline-block;
  letter-spacing: 0.2em;
  position: relative;
  z-index: 1;
  overflow: hidden;

  span {
    font-size: 0.9rem;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: translate(-100%);
    transition: 0.3s all ease-in-out;
    background: linear-gradient(to right, #c70039, #ff5733 70%);
    background-size: 200% 200%;
    animation: ${rainbow} 2s ease-in-out infinite;
  }

  &:hover:after {
    transform: translate(0);
    color: rgba(0, 0, 0, 0);
  }
`

export default Button

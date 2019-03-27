import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import Button from "./button"

const Hero = () => (
  <HeroWrapper>
    <HeroContainer>
      <Fade bottom delay={300}>
        <span>Conference 2019</span>
      </Fade>
      <Fade bottom delay={400}>
        <h1>Web Design Conference 2019</h1>
      </Fade>
      <Fade bottom delay={700}>
        <Date>September 6th-7th, Minnesota, United States</Date>
      </Fade>
      <Fade bottom delay={800}>
        <Button />
      </Fade>
    </HeroContainer>
  </HeroWrapper>
)

const HeroWrapper = styled.div`
  min-height: 700px;
  height: calc(100vh - 95px);
  display: flex;
  align-items: center;
  margin-bottom: 10em;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`

const Date = styled.span`
  margin-bottom: 50px;
  color: white;
  font-size: 1.5rem;
  display: block;
`

const HeroContainer = styled.div`
  padding: 0 15px;

  > span {
    color: white;
    font-size: 1.5rem;
    display: block;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 5.4rem;
    background: linear-gradient(to right, #c70039, #ff5733 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 20px;

    @media (max-width: 990px) {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 990px) {
    &:last-child {
      line-height: 1.5;
    }
  }

  @media (max-width: 670px) {
    span {
      font-size: 0.8rem;
    }
  }
`

export default Hero

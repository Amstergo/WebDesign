import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import News from "./news"
import Heading from "./heading"
import Button from "./button"

const NewsLayout = () => (
  <NewsWrapper>
    <Heading
      title="News"
      description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Natus error deleniti dolores necessitatibus eligendi.
      Nesciunt repellendus ab voluptatibus."
    />
    <NewsContainer>
      <Fade bottom delay="200">
        <News />
      </Fade>
      <Fade bottom delay="400">
        <News />
      </Fade>
      <Fade bottom delay="600">
        <News />
      </Fade>
    </NewsContainer>
    <Button name="More blog posts" />
  </NewsWrapper>
)

const NewsWrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  padding-bottom: 150px;

  > a {
    display: table;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 990px) {
    max-width: 720px;
  }

  @media (max-width: 770px) {
    max-width: 540px;
  }
`

const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.5em;
  margin-bottom: 50px;
  grid-row-gap: 2em;

  @media (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`

export default NewsLayout

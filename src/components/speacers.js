import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

import Heading from "./heading"

const Speacers = ({ data }) => (
  <SpeacersWrapper>
    <Heading />

    <StaticQuery
      query={PERSON_QUERY}
      render={data => (
        <SpeacersContainer>
          <SpeacerBox>
            <Fade>
              <Photo fluid={data.person1.childImageSharp.fluid} />
            </Fade>
            <Description>
              <Fade right>
                <h1>Emely Peters</h1>
              </Fade>
              <DescriptionText>
                <Fade right>
                  <span>WEB DESIGNER</span>
                </Fade>
                <Fade right>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus error deleniti dolores necessitatibus eligendi.
                    Nesciunt repellendus ab voluptatibus. Minima architecto
                    impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                    distinctio aperiam
                  </p>
                </Fade>
                <Fade right>
                  <p>Follow Emely </p>
                </Fade>
              </DescriptionText>
            </Description>
          </SpeacerBox>
        </SpeacersContainer>
      )}
    />
  </SpeacersWrapper>
)

const SpeacersWrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 990px) {
    max-width: 720px;
  }

  @media (max-width: 770px) {
    max-width: 540px;
  }
`

const SpeacersContainer = styled.div``

const SpeacerBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;
  margin-bottom: 50px;
`

const Photo = styled(Img)``

const Description = styled.div`
  align-self: center;

  h1 {
    left: -80px;
    position: relative;
    color: white;
    font-weight: 500;
  }
`

const DescriptionText = styled.div`
  padding-left: 30px;

  > span {
    color: #ff5733;
    display: block;
    margin-bottom: 1em;
  }

  > p {
    font-size: 16px;
  }
`

export const PERSONS_LAYOUT = graphql`
  fragment PersonLayout on File {
    childImageSharp {
      fluid(maxWidth: 665) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const PERSON_QUERY = graphql`
  query {
    person1: file(relativePath: { eq: "person_1.jpg" }) {
      ...PersonLayout
    }
  }
`

export default Speacers

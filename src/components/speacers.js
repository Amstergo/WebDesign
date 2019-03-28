import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa"

import Heading from "./heading"

const Speacers = ({ data }) => (
  <SpeacersWrapper>
    <Heading
      title="Speacers"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error
    deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab
    voluptatibus. Minima architecto impedit eaque molestiae dicta quam.
    Cum ducimus. Culpa distinctio aperiam"
    />

    <StaticQuery
      query={PERSON_QUERY}
      render={data => (
        <>
          <SpeacerBox>
            <Fade>
              <Img fluid={data.person1.childImageSharp.fluid} />
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
                  <Follow>
                    Follow Emely -{" "}
                    <ul>
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
                          <FaGithub />
                        </Link>
                      </li>
                    </ul>
                  </Follow>
                </Fade>
              </DescriptionText>
            </Description>
          </SpeacerBox>
          <SpeacerBox>
            <Fade>
              <Img fluid={data.person2.childImageSharp.fluid} />
            </Fade>
            <Description>
              <Fade left>
                <h1>Alex Anchor</h1>
              </Fade>
              <DescriptionText>
                <Fade left>
                  <span>WEB DESIGNER</span>
                </Fade>
                <Fade left>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus error deleniti dolores necessitatibus eligendi.
                    Nesciunt repellendus ab voluptatibus. Minima architecto
                    impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                    distinctio aperiam
                  </p>
                </Fade>
                <Fade left>
                  <Follow>
                    Follow Alex -{" "}
                    <ul>
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
                          <FaGithub />
                        </Link>
                      </li>
                    </ul>
                  </Follow>
                </Fade>
              </DescriptionText>
            </Description>
          </SpeacerBox>
          <SpeacerBox>
            <Fade>
              <Img fluid={data.person3.childImageSharp.fluid} />
            </Fade>
            <Description>
              <Fade right>
                <h1>Aaron Thomas</h1>
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
                  <Follow>
                    Follow Aaron -{" "}
                    <ul>
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
                          <FaGithub />
                        </Link>
                      </li>
                    </ul>
                  </Follow>
                </Fade>
              </DescriptionText>
            </Description>
          </SpeacerBox>
          <SpeacerBox>
            <Fade>
              <Img fluid={data.person4.childImageSharp.fluid} />
            </Fade>
            <Description>
              <Fade left>
                <h1>Cris Mathews</h1>
              </Fade>
              <DescriptionText>
                <Fade left>
                  <span>WEB DESIGNER</span>
                </Fade>
                <Fade left>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus error deleniti dolores necessitatibus eligendi.
                    Nesciunt repellendus ab voluptatibus. Minima architecto
                    impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                    distinctio aperiam
                  </p>
                </Fade>
                <Fade left>
                  <Follow>
                    Follow Cris -{" "}
                    <ul>
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
                          <FaGithub />
                        </Link>
                      </li>
                    </ul>
                  </Follow>
                </Fade>
              </DescriptionText>
            </Description>
          </SpeacerBox>
        </>
      )}
    />
  </SpeacersWrapper>
)

const SpeacersWrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  padding-bottom: 150px;

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

const SpeacerBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;
  margin-bottom: 50px;

  &:nth-child(even) {
    grid-template-areas: "text photo";

    > div:first-child {
      grid-area: photo;
    }

    > div:last-child {
      grid-area: text;
    }
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    grid-gap: 2em;

    &:nth-child(even) {
      grid-template-areas: "photo" "text";
    }
  }
`

const Description = styled.div`
  align-self: center;

  h1 {
    left: -80px;
    position: relative;
    color: white;
    font-weight: 500;

    @media (max-width: 1200px) {
      left: 0;
      padding-left: 30px;
    }
    @media (max-width: 990px) {
      padding-left: 0;
    }
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

  @media (max-width: 990px) {
    padding-left: 0;
  }
`

const Follow = styled.p`
  display: flex;
  align-items: baseline;

  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
    margin-left: 15px;

    li {
      margin-right: 15px;
      margin-bottom: 0;

      a {
        color: #ff5733;
        transition: 0.2s;

        &:hover {
          color: #e62900;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
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
    person2: file(relativePath: { eq: "person_2.jpg" }) {
      ...PersonLayout
    }
    person3: file(relativePath: { eq: "person_3.jpg" }) {
      ...PersonLayout
    }
    person4: file(relativePath: { eq: "person_4.jpg" }) {
      ...PersonLayout
    }
  }
`

export default Speacers

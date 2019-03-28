import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"

const News = ({ data }) => (
  <NewsContainer>
    <StaticQuery
      query={PERSON_QUERY}
      render={data => (
        <>
          <Link to="/">
            <Img fluid={data.person1.childImageSharp.fluid} />
          </Link>
          <TextContainer>
            <h2>
              <Link to="/">Design your open source strategy</Link>
            </h2>
            <span>
              By <Link to="/">Emely Peters</Link> — Sep. 10, 2019
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              error deleniti dolores necessitatibus eligendi. Nesciunt
              repellendus ab voluptatibus.
            </p>
          </TextContainer>
        </>
      )}
    />
  </NewsContainer>
)

const NewsContainer = styled.div``

const TextContainer = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 400;
    margin: 25px 0;
    line-height: 1.2;
  }

  > span {
    font-size: 14px;
    color: #cfcfd1;

    a {
      color: #ff5733;
    }
  }

  p {
    font-size: 16px;
    margin-top: 25px;
  }
`

export const PERSON_QUERY = graphql`
  query {
    person1: file(relativePath: { eq: "person_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 665) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default News

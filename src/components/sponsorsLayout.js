import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import Heading from "./heading"
import Sponsor from "./sponsor"
import Button from "./button"

const SponsorsLayout = ({ data }) => (
  <SponsorsWrapper>
    <Heading
      title="Sponsors"
      description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Natus error deleniti dolores necessitatibus eligendi.
      Nesciunt repellendus ab voluptatibus."
    />
    <SponsorsContainer>
      <StaticQuery
        query={SPONSOR_QUERY}
        render={data => (
          <>
            <Fade delay="300">
              <Sponsor img={data.logo1.childImageSharp.fluid} />
            </Fade>
            <Fade delay="400">
              <Sponsor img={data.logo2.childImageSharp.fluid} />
            </Fade>
            <Fade delay="500">
              <Sponsor img={data.logo3.childImageSharp.fluid} />
            </Fade>
            <Fade delay="600">
              <Sponsor img={data.logo4.childImageSharp.fluid} />
            </Fade>
            <Fade delay="700">
              <Sponsor img={data.logo5.childImageSharp.fluid} />
            </Fade>
            <Fade delay="800">
              <Sponsor img={data.logo6.childImageSharp.fluid} />
            </Fade>
          </>
        )}
      />
    </SponsorsContainer>
    <Button name="by a sponsor" />
  </SponsorsWrapper>
)

const SponsorsWrapper = styled.div`
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

const SponsorsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  padding-bottom: 50px;

  @media (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`

export const SPONSOR_LAYOUT = graphql`
  fragment SponsorLayout on File {
    childImageSharp {
      fluid(maxWidth: 375) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const SPONSOR_QUERY = graphql`
  query {
    logo1: file(relativePath: { eq: "logo_1.png" }) {
      ...SponsorLayout
    }
    logo2: file(relativePath: { eq: "logo_2.png" }) {
      ...SponsorLayout
    }
    logo3: file(relativePath: { eq: "logo_3.png" }) {
      ...SponsorLayout
    }
    logo4: file(relativePath: { eq: "logo_4.png" }) {
      ...SponsorLayout
    }
    logo5: file(relativePath: { eq: "logo_5.png" }) {
      ...SponsorLayout
    }
    logo6: file(relativePath: { eq: "logo_6.png" }) {
      ...SponsorLayout
    }
  }
`

export default SponsorsLayout

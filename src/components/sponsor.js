import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Sponsor = props => (
  <SponsorWrapper>
    <Img fluid={props.img} />
  </SponsorWrapper>
)

const SponsorWrapper = styled.div`
  padding: 0 15px;
`

export default Sponsor

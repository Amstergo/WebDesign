import React from "react"
import styled from "styled-components"

import Heading from "./heading"

const Speacers = () => (
  <SpeacersWrapper>
    <Heading />
  </SpeacersWrapper>
)

const SpeacersWrapper = styled.div`
  margin: 0 auto;

  @media (max-width: 990px) {
    max-width: 720px;
  }

  @media (max-width: 770px) {
    max-width: 540px;
  }
`

export default Speacers

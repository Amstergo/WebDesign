import React from "react"
import styled from "styled-components"

import Heading from "./heading"
import Program from "./program"

const ProgramsLayout = () => (
  <ProgramsWrapper>
    <Heading
      title="Programs"
      description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Natus error deleniti dolores necessitatibus eligendi.
      Nesciunt repellendus ab voluptatibus."
    />
    <Program
      date="8:00"
      day="am"
      description="Design your open source strategy"
      name="Chris Mathews"
    />
    <Program
      date="9:30"
      day="am"
      description="Design your open source strategy"
      name="Chris Mathews"
    />
    <Program
      date="10:30"
      day="am"
      description="Design your open source strategy"
      name="Chris Mathews"
    />
    <Program date="10:45" day="noon" description="Break With Snacks" />
    <Program
      date="11:30"
      day="am"
      description="Design your open source strategy"
      name="Chris Mathews"
    />
    <Program date="12:00" day="noon" description="Break For Lunch" />
    <ProgramsContainer />
  </ProgramsWrapper>
)

const ProgramsWrapper = styled.div`
  margin: 0 auto;
  padding: 150px 15px 150px;

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

const ProgramsContainer = styled.div``

export default ProgramsLayout

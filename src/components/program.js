import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const Program = props => (
  <Fade delay="300">
    <ProgramWrapper>
      <Date>
        <p>
          {props.date}
          <span>{props.day}</span>
        </p>
      </Date>
      <Description>
        <p>
          {props.description}
          <span>{props.name}</span>
        </p>
      </Description>
    </ProgramWrapper>
  </Fade>
)

const ProgramWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  border-top: 1px solid #383b4f;
  padding: 50px 0;
  align-items: baseline;

  &:last-child {
    border-bottom: 1px solid #383b4f;
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`

const Date = styled.div`
  padding: 0 15px;
  font-size: 24px;

  p {
    color: white;
    margin: 0;

    span {
      font-size: 16px;
      font-weight: 300;
      text-transform: uppercase;
      margin-left: 15px;
    }
  }
`

const Description = styled.div`
  padding: 0 15px;

  p {
    font-size: 24px;
    color: white;
    margin: 0;
    line-height: 1.5;

    span {
      display: block;
      font-size: 16px;
      font-weight: 300;
      color: #cfcfd1;
    }
  }
`

export default Program

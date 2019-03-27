import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const Heading = () => (
  <HeadingWrapper>
    <ContainerTitle>
      <Fade left>
        <h1>Speakers</h1>
      </Fade>
    </ContainerTitle>
    <ContainerDesc>
      <Fade bottom>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error
          deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab
          voluptatibus. Minima architecto impedit eaque molestiae dicta quam.
          Cum ducimus. Culpa distinctio aperiam
        </p>
      </Fade>
    </ContainerDesc>
  </HeadingWrapper>
)

const HeadingWrapper = styled.div`
  display: flex;
  padding: 0 15px;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`

const ContainerTitle = styled.div`
  flex: 0 0 33%;

  h1 {
    position: relative;
    font-size: 2.5rem;
    color: #fff;
    padding-bottom: 30px;
    font-weight: 400;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 2px;
      background: linear-gradient(to right, #c70039, #ff5733 70%);

      @media (min-width: 990px) {
        left: -60px;
      }
    }
  }

  @media (max-width: 990px) {
    flex: 0 0 100%;
  }
`

const ContainerDesc = styled.div`
  margin-top: 50px;
  padding: 0 15px 0 40px;
  max-width: 42%;
  flex: 0 0 44%;
  font-size: 16px;

  @media (max-width: 990px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 0;
  }
`

export default Heading

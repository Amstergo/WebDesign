import React from "react"

import Hero from "../components/hero"
import Speacers from "../components/speacers"
import ProgramsLayout from "../components/programsLayout"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Speacers />
    <ProgramsLayout />
  </Layout>
)

export default IndexPage

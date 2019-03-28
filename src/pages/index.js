import React from "react"

import Hero from "../components/hero"
import Speacers from "../components/speacers"
import ProgramsLayout from "../components/programsLayout"
import SponsorsLayout from "../components/sponsorsLayout"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Speacers />
    <ProgramsLayout />
    <SponsorsLayout />
  </Layout>
)

export default IndexPage

import React from "react"

import Hero from "../components/hero"
import Speacers from "../components/speacers"
import ProgramsLayout from "../components/programsLayout"
import SponsorsLayout from "../components/sponsorsLayout"
import NewsLayout from "../components/newsLayout"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Speacers />
    <ProgramsLayout />
    <SponsorsLayout />
    <NewsLayout />
  </Layout>
)

export default IndexPage

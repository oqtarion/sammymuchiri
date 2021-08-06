import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/assets/seo"

import Hero from "../components/templates/Hero"
import About from "../components/templates/About"
import Services from "../components/templates/Services"
import Projects from "../components/templates/Projects"
import Process from "../components/templates/Process"
import Connect from "../components/templates/Connect"

const IndexPage = () => (
  <Layout>
    <Seo title="Portfolio" />
    <Hero />
    <About />
    <Services />
    <Projects />
    <Process />
    <Connect />
  </Layout>
)

export default IndexPage

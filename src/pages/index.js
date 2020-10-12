import React from "react"
import "../styles/styles.scss"
import Link from "gatsby"
//Import Components
import AboutPage from "./about"
import TeaserPage from "./teaser"
import AnimationPage from "./animation"
import Layout from "../utils/Layout"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import "../styles/backgroundImage.scss"

const IndexPage = props => (
  <div>
    <Layout>
      <BackgroundImage
        className="heroImage"
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <div className="grid-overlay">
          <div className="hero-grid">
            <h1>Adventurouse animated short</h1>
            <p>made with Stop Motion</p>
            <button>Teaser</button>
          </div>
        </div>
      </BackgroundImage>
      <TeaserPage />
      <AnimationPage />
      <AboutPage />
    </Layout>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "back2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

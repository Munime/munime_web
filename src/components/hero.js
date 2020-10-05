import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "munime.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="hero-main">Munime</div>
        </div>
        <div className="hero-text">
          <span>stop motion animation cartoon</span>
        </div>
        <div className="scroll">
          <span>Teaser</span>
        </div>
      </div>
    </div>
  )
}

export default Hero

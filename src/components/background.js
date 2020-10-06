import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Background = () => {
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
    <div className="background-img">
      <div className="container">
        <div className="row">
          <div className="main-text">Munime</div>
          <div className="main-img">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Read a Story</span>
        </div>
      </div>
    </div>
  )
}

export default Background

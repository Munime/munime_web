import React from "react"
import Layout from "../utils/Layout"
import Video from "../components/video"
import styled from "styled-components"


const TeaserPage = () => {
  const Section = styled.section`
  position: relative; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `
  return (
    <Layout>
      <Section>
      <Video
        videoSrcURL="https://vimeo.com/437482367"
        videoTitle="Munime official teaser"
      />
    </Section>
    </Layout>
  )
}

export default TeaserPage

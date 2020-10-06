import React from "react"
import "../styles/styles.scss"

//Import Components
import Header from "../components/header"
import AboutPage from "./about"
import StoryPage from "./story"
import AnimationPage from "./animation"

const IndexPage = () => (
  <div>
    <Header>
      <StoryPage />
      <AnimationPage />
      <AboutPage />
    </Header>
  </div>
)

export default IndexPage

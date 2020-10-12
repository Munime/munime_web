import React from "react"
import styled from "styled-components"

const VideoWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoWrap>
    <iframe 
    src="https://player.vimeo.com/video/437482367" 
    width="1280" 
    height="600" 
    frameborder="0" 
    allow="autoplay; fullscreen" 
    allowfullscreen
    align="center">   
    </iframe>
  </VideoWrap>
)
export default Video
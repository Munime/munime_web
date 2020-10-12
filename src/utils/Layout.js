import React from "react"
import Header from "../components/header"
import styled from "styled-components"


const Layout = ({ children }) => {
  const PageWrapper = styled.section`
  display: flex
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat:
  
  `

  return (
    <>
      <Header />
      <PageWrapper>{children}</PageWrapper>
    </>
  )
}

export default Layout

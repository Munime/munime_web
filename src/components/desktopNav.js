import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

export const DesktopNavMenu = () => {
  return (
    <StyledHeader>
      <NavWrapper>
        <LogoIcon>
          <Link to="/">Munime</Link>
        </LogoIcon>
        <ul>
          <li>
            <Link to="/teaser">TEASER</Link>
          </li>
          <li>
            <Link to="/animation">ANIMATION</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </NavWrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: none;
  @media ${breakpoints.lg} {
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    

    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-self: center;
      width: 100%;
      margin: 0;

      li {
        list-style: none;

        a {
          font-size: 1rem;
          font-weight: 400;
          text-decoration: none;
          letter-spacing: 1.8px;
          color: #f7ede2;
          margin-right: 2rem;
          transition: color 200ms;

          :hover {
            color: #f28482;
          }
        }
      }
    }
  }
`
const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  margin: 0;
`
const LogoIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-strat;
  align-items: center;
  margin-left: 1.5rem;
  margin-bottom: 1.1rem;

  a {
    font-size: 1.2rem;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: #f7ede2;
    text-decoration: none;
  }
`

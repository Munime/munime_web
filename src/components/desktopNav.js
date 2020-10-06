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
            <Link to="/story">STORY</Link>
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
    transition: backgroud 300ms;
    background: ${({ background }) => (background ? "#000" : "#f28482")};

    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      margin: 0;

      li {
        list-style: none;

        a {
          font-size: 1.2rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 1.5px;
          color: #f7ede2;
          margin-right: 2rem;
          transition: color 200ms;

          :hover {
            color: #84a59d;
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
  align-items: center;
  width: 100%;
  margin: 0;
`
const LogoIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-strat;
  align-items: center;
  margin: 1rem;

  a {
    font-size: 1.2rem;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: #f7ede2;
    text-decoration: none;
  }
`

import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

const MobileNavMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false)
  return (
    <MenuBar>
      <LogoIcon>Munime</LogoIcon>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLink menuOpen={menuOpen}>
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
      </MenuLink>
    </MenuBar>
  )
}

const MenuBar = styled.header`
  @media ${breakpoints.lg} {
    display: none;
  }
  height: 3rem;
  position: fixed;
  width: 100%;
  background: #f28482;
  border-bottom: #f6bd60;
  z-index: 10;
  display: flex;
  justify-contetnt: space-between;
  align-items: center;
`
const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  outline: thin-dotted;
  z-index: 11;
  margin: 1rem;

  div {
    width: 2rem;
    height: 0.25rem;
    background: #f5cac3;
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(44deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-20px)" : "translate(0)"};
    }
    :nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-44deg)" : "rotate(0)"};
    }
  }
`

const MenuLink = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f28482;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: transform 300ms;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(100%)"};

  ul {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
        list-style: none;

        a {
            font-size: 1.2rem;
            font-weight: 700;
            text-decoration: none;
            letter-spacing: 1.5px;
            color: #f7ede2;
            transition: color 200ms;
    }
  }
`

const LogoIcon = styled.div`
  font-size: 1.2rem;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 1rem;
  color: #f7ede2;
  display: flex;
  flex-direction: row;
  justify-content: flex-strat;
  align-items: center;
  margin: 1rem;
`
export default MobileNavMenu

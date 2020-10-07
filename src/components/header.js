import React from "react"
import { DesktopNavMenu } from "./desktopNav"
import MobileNavMenu from "./mobileNav"

const Header = ({ children }) => {
  return (
    <>
      <DesktopNavMenu children={children} />
      <MobileNavMenu children={children} />
    </>
  )
}

export default Header

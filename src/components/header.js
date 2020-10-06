import React from "react"
import { DesktopNavMenu } from "./desktopNav"
import MobileNavMenu from "./mobileNav"

const Header = () => {
  return (
    <>
      <DesktopNavMenu />
      <MobileNavMenu />
    </>
  )
}

export default Header

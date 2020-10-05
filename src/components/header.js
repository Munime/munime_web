import { Link } from "gatsby"

import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">MUNIME</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/story">STORY</Link>
            <Link to="/animation">ANIMATION</Link>
            <Link to="/about">ABOUT</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header

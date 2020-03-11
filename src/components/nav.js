import React from "react"
import NavLink from "./nav-link"

export default () => (
  <header>
    <NavLink to="/" className="text-xl pb-5">
      Tony D'Addeo
    </NavLink>
    <NavLink to="/about">
      About me
    </NavLink>
    <NavLink to="/reading-lists">
      Reading lists
    </NavLink>
    <NavLink to="/blog">
      Blog
    </NavLink>
    <NavLink to="/acknowledgements">
      Acknowledgements
    </NavLink>
  </header>
)

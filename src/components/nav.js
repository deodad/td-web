import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

export default ({ siteTitle }) => (
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

const NavLink = ({ to, className, children }) =>
  <Link to={to} className={classnames('block', 'visited:text-blue-600', className)}>
    {children}
  </Link>

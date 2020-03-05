import React from "react"
import { Link } from "gatsby"

export default ({ siteTitle }) => (
  <header>
    <Link to="/" className="block text-xl pb-5">
      Tony D'Addeo
    </Link>
    <Link to="/about" className="block">
      About me
    </Link>
    <Link to="/reading-lists" className="block">
      Reading lists
    </Link>
    <Link to="/blog" className="block">
      Blog
    </Link>
  </header>
)

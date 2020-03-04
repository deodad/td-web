import React from "react"
import { Link } from "gatsby"

export default ({ siteTitle }) => (
  <header>
    <Link to="/" className="block text-lg pb-5">
      Tony D'Addeo
    </Link>
    <Link to="/" className="block"> 
      Home
    </Link>
    <Link to="/about" className="block">
      About me
    </Link>
    <Link to="/reading-lists" className="block">
      Reading lists
    </Link>
  </header>
)

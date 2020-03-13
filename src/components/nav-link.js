import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

export default ({ to, className, children }) =>
  <Link to={to} className={classnames('block', 'visited:text-blue-700', className)}>
    {children}
  </Link>

import React from "react"
import Nav from "./nav"

export default ({ children }) => {
  return (
    <div className="flex p-8 font-sans">
      <div className="flex-none mr-12">
        <Nav />
      </div>
      <div className="flex-auto max-w-screen-xl">
        <main>{children}</main>
      </div>
    </div>
  )
}

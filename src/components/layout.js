import React from "react"
import Nav from "./nav"

export default ({ children }) => {
  return (
    <div className="flex p-10">
      <div className="flex-none mr-6">
        <Nav />
      </div>
      <div className="flex-auto max-w-screen-xl px-6">
        <main>{children}</main>
      </div>
    </div>
  )
}

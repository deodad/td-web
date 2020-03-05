import React from "react"
import Nav from "./nav"

export default ({ children }) => {
  return (
    <div className="font-sans max-w-screen-xl m-auto">
      <div className="flex p-4 md:p-6 lg:p-8">
        <div className="flex-none mr-8 md:mr-10 lg:mr-12">
          <Nav />
        </div>
        <div className="flex-auto">
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

import React from "react"
import Nav from "./nav"
import TopNav from "./top-nav"

export default ({ children }) => {
  return (
    <div className="font-sans max-w-screen-xl m-auto flex flex-col md:flex-row mb-4 p-4 md:p-6 lg:p-8">
      <div className="md:hidden flex-none mb-6">
        <TopNav />
      </div>
      <div className="hidden md:block flex-none mr-8 md:mr-10 lg:mr-12">
        <Nav />
      </div>
      <div className="flex-auto">
        <main>{children}</main>
      </div>
    </div>
  )
}

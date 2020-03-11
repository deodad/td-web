import React, { useState, useLayoutEffect } from "react"
import classnames from "classnames"
import NavLink from "./nav-link"

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when the side nav is open
  useLayoutEffect(
    () => (document.body.style.setProperty("overflow-y", isOpen ? "hidden" : "auto")),
    [isOpen]
  )

  return (
    <header className="flex flex-between items-center md:hidden">
      <NavLink to="/" className="text-xl flex-auto">
        Tony D'Addeo
      </NavLink>
      <button className="fixed right-0 mt-1 mr-2 p-2 bg-white rounded-sm shadow-sm" onClick={() => setIsOpen(true)}>
        <div className="flex flex-col justify-between w-4 h-4">
          <div className="bg-black" style={{height: ".15rem"}}></div>
          <div className="bg-black" style={{height: ".15rem"}}></div>
          <div className="bg-black" style={{height: ".15rem"}}></div>
        </div>
      </button>
      <SideNav open={isOpen} close={() => setIsOpen(false)} />
    </header>
  )
}

const SideNav = ({ open, close }) => {
  const openClass = { hidden: !open }

  return (
    <div className={classnames("fixed inset-0", openClass)} onClick={close}>
      <div
        className="absolute inset-y-0 right-0 w-2/3 bg-white p-4 shadow-sm"
        onClick={e => e.stopPropagation()}
      >
        <SideNavLink to="/about">About me</SideNavLink>
        <SideNavLink to="/reading-lists">Reading lists</SideNavLink>
        <SideNavLink to="/blog">Blog</SideNavLink>
        <SideNavLink to="/acknowledgements">Acknowledgements</SideNavLink>
      </div>
    </div>
  )
}

const SideNavLink = props => <NavLink className="mb-1" {...props} />

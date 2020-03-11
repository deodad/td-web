import React, { useState, useLayoutEffect } from "react"
import classnames from "classnames"
import NavLink from "./nav-link"

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when the side nav is open
  useLayoutEffect(
    () =>
      document.body.style.setProperty("overflow-y", isOpen ? "hidden" : "auto"),
    [isOpen]
  )

  return (
    <header className="flex flex-between items-center md:hidden">
      <NavLink to="/" className="text-xl flex-auto">
        Tony D'Addeo
      </NavLink>
      <button
        className="fixed right-0 block w-8 h-6 bg-yellow-300 rounded-l-sm shadow"
        onClick={() => setIsOpen(true)}
      ></button>
      <SideNav open={isOpen} close={() => setIsOpen(false)} />
    </header>
  )
}

const SideNav = ({ open, close }) => {
  const openClass = { hidden: !open }

  return (
    <div className={classnames("fixed inset-0 flex", openClass)}>
      <button className="flex-none w-1/3" onClick={close}></button>
      <div className="flex-none w-2/3 bg-white p-4 shadow">
        <SideNavLink to="/about">About me</SideNavLink>
        <SideNavLink to="/reading-lists">Reading lists</SideNavLink>
        <SideNavLink to="/blog">Blog</SideNavLink>
        <SideNavLink to="/acknowledgements">Acknowledgements</SideNavLink>
      </div>
    </div>
  )
}

const SideNavLink = props => <NavLink className="mb-1" {...props} />

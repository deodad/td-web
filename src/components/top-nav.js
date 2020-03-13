import React, { useState, useEffect } from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import NavLink from "./nav-link"

const postItClasses = [
  "block",
  "pl-3 pr-5 py-1",
  "mb-3 -mr-1",
  "text-left text-lg",
  "font-hand font-bold",
  "text-blue-700",
  "rounded-l-sm",
  "shadow",
]

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const listener = event => {
        if (event.target.closest("#post-it-nav") === null) {
          setIsOpen(false)
        }
      }

      document.addEventListener("click", listener)

      return () => document.removeEventListener("click", listener)
    }
  }, [isOpen])

  return (
    <>
      <header className="flex md:hidden">
        <NavLink to="/" className="text-xl flex-none">
          Tony D'Addeo
        </NavLink>
        <div className="fixed right-0 flex flex-col z-50">
          <button
            className={classnames(postItClasses, "bg-yellow-300")}
            onClick={() => setIsOpen(!isOpen)}
          >
            Nav
          </button>

          <PostItTab to="/about" open={isOpen}>
            About
          </PostItTab>
          <PostItTab to="/reading-lists" open={isOpen}>
            Reading
          </PostItTab>
          <PostItTab to="/blog" open={isOpen} color="blue">
            Blog
          </PostItTab>
          <PostItTab to="/acknowledgements" open={isOpen} color="green">
            Credits
          </PostItTab>
        </div>
      </header>
    </>
  )
}

const PostItTab = ({ to, open, color = "pink", children }) => (
  <Link
    to={to}
    className={classnames(
      postItClasses,
      { invisible: !open },
      `no-underline visited:text-blue-700 bg-${color}-300`
    )}
  >
    {children}
  </Link>
)

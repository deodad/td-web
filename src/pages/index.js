import React, { useState, useLayoutEffect } from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Welcome!</h1>

    <p>
      I'm Tony D'Addeo. This is my website. It's a place I put interesting
      things I've done or encountered.
    </p>

    <section>
      <h2>What am I doing now?</h2>

      <PersistentDetails
        id="a8dcf41f2b45"
        summary="Exploring the world of architecture and urban design"
      >
        <p>
          This thread started for me at the beginning of 2020 when I read Simon
          Sarris's{" "}
          <a href="https://medium.com/@simon.sarris/designing-a-new-old-home-part-1-cf298b58ed41">
            Designing a New Old Home
          </a>{" "}
          .
        </p>
        <p>
          The more I've seen about the field the more interested I am. I'm even
          considering if I should get a Masters in Architecture and move into
          the field entirely.
        </p>
        <PersistentDetails
          id="059bf2e57c9b"
          summary="Interesting books I've found on the space"
        >
          <ul className="list-disc ml-8">
            <li>
              <span className="italic">Timeless Way of Building</span> by
              Christopher Alexander
            </li>
            <li>
              <span className="italic">Timeless Way of Building</span> by
              Christopher Alexander
            </li>
            <li>
              <span className="italic">Thermal Delight in Architecture</span> by
              Lisa Heschong
            </li>
            <li>
              <span className="italic">The Place of Houses</span> by Charles
              Moore, Gerald Allen, and Donlyn Lyndon
            </li>
            <li>
              <span className="italic">In Praise of Shadows</span> by Jun'ichirō
              Tanizaki
            </li>
          </ul>
        </PersistentDetails>
        <PersistentDetails
          id="860a3718e574"
          summary="Interesting movies I've watched"
        >
          <ul className="list-disc ml-8">
            <li>
              <span className="italic">Citizen Architect</span>
            </li>
            <li>
              <span className="italic">Urbanized</span>
            </li>
          </ul>
        </PersistentDetails>
        If you have any recommendations for people or media in this space let me
        know.
      </PersistentDetails>

      <PersistentDetails
        id="64409bed0fc9"
        summary="Cooking for myself and others"
      >
        <p>
          There was a time when I was up on the Austin restaurant scene but
          since I haven't had stable income in a while I rarely eat out these
          days. This would count as a loss, as sharing a nice meal out with
          friends is a favorite activity of mine, if it wasn't the case that
          sharing a nice meal in with friends is at least as good!
        </p>

        <p>
          It feels great when things shift in life from labeled activities (i.e.
          dinner party) to part of the fabric of life. Wife and I have reached
          this point with shared meals at home with friends. It's the perfect
          barbell strategy: one night a week we spend a couple hours cooking an
          grand meal more elaborate than we would do for just the two of us and
          then a few others we just show up with a bottle of wine and enjoy
          being served.
        </p>

        <p>
          One of our friends gave wife and I a cookbook called{" "}
          <span className="italic underline">Vietnamese Food Any Day</span> that
          we've been cooking out of. Everything has been incredibly tasty and
          dishes we hadn't cooked before (
          <a href="https://www.youtube.com/watch?v=3ZGLC53BsmA">
            sizzling rice crepes
          </a>{" "}
          have been a favorite). The author, Andrea Nguyen, did a great job
          making the ingredients and prep times for the recipes approachable.
          Highly recommend!
        </p>
      </PersistentDetails>

      <PersistentDetails
        id="7f8a0e18e066"
        summary="Independent business and technology consulting"
      >
        <p>
          I recently helped Daniel Vassallo launch{" "}
          <a href="https://userbase.com/">Userbase</a> , a data-persistence and
          user- management service for static sites. Daniel is an interesting
          contrarian thinker who not only talks the talk but walks the walk.
          Check out <a href="https://danielvassallo.com/">his site</a> to if
          you're interested in quiting your cushy tech job to work for yourself.
        </p>

        <p>
          I've been serving both as an advisor to the leadership at{" "}
          <a href="https://www.personalwine.com/">Personal Wine</a> , a company
          I once ran, and as a mentor to the companies lone software developer.
          I've enjoyed mentoring and want to do more of it.
        </p>
      </PersistentDetails>
    </section>
  </Layout>
)

const PersistentDetails = ({ id, summary, children }) => {
  const key = `details-${id}`
  const [open, setOpen] = useState(false)

  const handleToggle = e => {
    e.stopPropagation()
    setOpen(e.target.open)
    localStorage.setItem(key, e.target.open)
  }

  useLayoutEffect(() => setOpen(localStorage.getItem(key) === "true"))

  return (
    <details onToggle={handleToggle} open={open} className="mb-2 px-3 py-2">
      <summary className="mb-2 cursor-pointer">{summary}</summary>
      {children}
    </details>
  )
}

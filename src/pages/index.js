import React, { useState } from "react"
import Layout from "../components/layout"

export default () =>
  <Layout>
    <h1>Welcome!</h1>

    <p>
      I'm Tony D'Addeo. This is my website. It's a place I put interesting things
      I've done or encountered.
    </p>

    <section>
      <h2>What am I doing now?</h2>

      <PersistentDetails
        id="a8dcf41f2b45"
        summary="Exploring the world of architecture and urban design"
      >
        <p>
          This thread started for me at the beginning of 2020 when I read Simon Sarris's
          {' '}
          <a href="https://medium.com/@simon.sarris/designing-a-new-old-home-part-1-cf298b58ed41">
            Designing a New Old Home
          </a>
          {' '}.
        </p>

        <p>
          The more I've seen about the field the more interested I am. I'm even considering
          if I should get a Masters in Architecture and move into the field entirely.
        </p>

        <PersistentDetails
          id="059bf2e57c9b"
          summary="Interesting books I've found on the space"
        >
          <ul className="list-disc ml-8">
            <li>
              <span className="italic">Timeless Way of Building</span> by Christopher Alexander
            </li>
            <li>
              <span className="italic">Timeless Way of Building</span> by Christopher Alexander
            </li>
            <li>
              <span className="italic">Thermal Delight in Architecture</span> by Lisa Heschong
            </li>
            <li>
              <span className="italic">The Place of Houses</span> by Charles Moore, Gerald Allen, and Donlyn Lyndon
            </li>
            <li>
              <span className="italic">In Praise of Shadows</span> by Jun'ichirō Tanizaki
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

        If you have any recommendations for people or media in this space let me know.
      </PersistentDetails>

      <PersistentDetails
        id="7f8a0e18e066"
        summary="Independent business and technology consulting"
      >
        <p>
          I recently helped Daniel Vassallo launch
          {' '}<a href="https://userbase.com/">Userbase</a>{' '}, a data-persistence and user-
          management service for static sites. Daniel is an interesting contrarian thinker who
          not only talks the talk but walks the walk. Check out
          {' '}<a href="https://danielvassallo.com/">his site</a>{' '}
          to if you're interested in quiting your cushy tech job to work for yourself.
        </p>

        <p>
          I've been serving both as an advisor to the leadership at
          {' '}<a href="https://www.personalwine.com/">Personal Wine</a>{' '}, a company I
          once ran, and as a mentor to the companies lone software developer. I've enjoyed
          mentoring and want to do more of it.
        </p>
      </PersistentDetails>

      <PersistentDetails
        id="64409bed0fc9"
        summary="A lot of cooking"
      >
        <p>
          There was a time when I was up on the Austin restaurant scene but since I haven't
          had stable income in a while I almost never eat out. This would be a lose as eating
          a nice meal out with friends was a favorite activity of mine, but fortunately it
          turns out that eating a nice meal in with friends is at least as good!
        </p>

        <p>
          We've moved beyond just the dinner party within our friends group to just having
          each other over for dinner throughout the week. It's the perfect barball strategy:
          one night of the week you spend a couple hours cooking a big meal and then a couple
          others you just show up with a bottle of wine and enjoy being served.
        </p>

        <p>
          Not to be romantic about it but it does feel like simple pleasures and efficiencies
          like this are lost in our highly atomized society. In the past it seems that more
          people at together, whether it be a communal or multi-generational family setting.
        </p>

        <p>
          What stories do you have of eating growing up?
        </p>

        <p>
          Some friends of our gave us a cookbook called Vietnamese Food Any Day that my wife
          and I have been cooking out of. Everything has been incrediblely tasty and in styles
          of food we hadn't cooked before. The author, Andrea Nguyen did a great job making
          the ingredients and prep times for the recipes approachable. Highly recommend!
        </p>
      </PersistentDetails>
    </section>
  </Layout>

const PersistentDetails = ({ id, summary, children }) => {
  const key = `details-${id}`
  const [open, setOpen] = useState(localStorage.getItem(key) === 'true')

  const handleToggle = (e) => {
    e.stopPropagation()
    setOpen(e.target.open)
    localStorage.setItem(key, e.target.open)
  }

  return (
    <details
      onToggle={handleToggle}
      open={open}
      className="mb-2 px-3 py-2"
    >
      <summary className="mb-2 cursor-pointer">{summary}</summary>
      {children}
    </details>
  )
}

import React from "react"
import Layout from "../components/layout"

export default () =>
  <Layout>
    <h1>Welcome!</h1>

    <p>
      I'm Tony D'Addeo. This is my website. It's a place I put interesting things
      I've done or encountered.
    </p>

    <h2>What am I doing now?</h2>

    <Drawer title="Exploring the world of architecture and urban design">
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

      <Drawer title="Interesting books I've found on the space">
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
      </Drawer>

      If you have any recommendations for people or media in this space let me know.
    </Drawer>
  </Layout>

const Drawer = ({ title, children }) =>
  <details className="mb-2 px-3 py-2">
    <summary className="mb-2 cursor-pointer">{title}</summary>
    {children}
  </details>

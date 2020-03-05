import React from "react"
import Layout from "../components/layout"

export default () =>
  <Layout>
    <h1>Acknowledgements</h1>

    <p>
      Almost everything you see on this website was adapted from someone else. Usually
      the someone else is someone I don't know personally. Thank you people!
    </p>

    <ul>
      <li className="pb-1">
        <a href="https://www.perell.com/">David Perrel</a> for his posts about writing online.
      </li>
      <li className="pb-1">
        <a href="https://tomcritchlow.com/">Tom Critchlow</a> for his collapsible outline approach.
      </li>
      <li className="pb-1">
        <a href="https://davidklaing.com/">David Klaing</a> for his home page which served as great example in many ways.
      </li>
      <li className="pb-1">
        <a href="https://www.ribbonfarm.com/about/">Venkatesh Rao</a> for his domestic cozy aesthetic concept.
      </li>
      <li className="pb-1">
        <a href="https://simonsarris.com/">Simon Sarris</a> for his highly aesthetic Simeville. 
      </li>
    </ul>
  </Layout>

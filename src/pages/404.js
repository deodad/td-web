import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not a Page" />
    <h1>Not a Page</h1>
    <p>Nothing was found at this url.</p>
    <Link to="/">Go home?</Link>
  </Layout>
)

export default NotFoundPage

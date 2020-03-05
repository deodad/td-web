import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default (props) => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Welcome!</h1>

      <p>
        I'm Tony D'Addeo.
      </p>

      <ul>
        { posts.map(({ node }) => (
            <li key={node.fields.slug}>
              <Link to={node.fields.slug}>
                { node.frontmatter.title }
              </Link>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

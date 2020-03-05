import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default (props) => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blog</h1>

      <ul>
        { posts.map(({ node }) => (
            <li key={node.fields.slug} className="py-1">
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>

              <span className="ml-3 text-sm text-gray-600">
                {node.frontmatter.date}
              </span>
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
            date(formatString: "MMMM D, YYYY")
            title
          }
        }
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default (props) => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      { posts.map(({ node }) => {
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>
                  { node.frontmatter.title }
                </Link>
              </h3>
            </div>
          )
        })
      }
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

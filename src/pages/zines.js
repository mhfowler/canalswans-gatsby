import React from "react"
import { graphql } from "gatsby"
import SLink from '../components/SLink'
import Layout from "../layouts/layout.js"

const PostLink = ({ post }) => (
  <div>
    <SLink to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </SLink>
  </div>
)

const ZinesPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Zines = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout hideFooter={true}>
      <div className="toc-wrapper">
        <p className="table-of-contents">Zines</p>
        <div className="posts-wrapper">{Zines}</div>
      </div>
    </Layout>
  )
}
export default ZinesPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "zine" } } }
    ) 
    {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../layouts/layout.js"
import SLink from "../components/SLink";

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout hideFooter={true}>
      <div className="toc-wrapper">
        <p className="table-of-contents">Table Of Contents</p>
        <div className="posts-wrapper">{Posts}</div>
      </div>
      <div className="rssWrapper">
          <SLink className="hlink" to='/rss.xml'>rss</SLink>
      </div>
    </Layout>
  )
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    filter: { frontmatter: { draft: { ne: "true" }, type: { eq: "blog" } }}
    ) 
    {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            draft
          }
        }
      }
    }
  }
`
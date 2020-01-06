const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // all markdown remark
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   if (node.frontmatter.path) {
  //     console.log(`++ creating md page ${node.frontmatter.path}`)
  //     createPage({
  //       path: node.frontmatter.path,
  //       component: blogPostTemplate,
  //       context: {}, // additional data can be passed via context
  //     })
  //   } else {
  //   }
  // })

  // // all mdx
  const mdxResult = await graphql(`
    query {
     allMdx {
      edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (mdxResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "mdx createPages" query')
  }
  // Create blog post pages.
  const mdxPosts = mdxResult.data.allMdx.edges
  // you'll call `createPage` for each result
  mdxPosts.forEach(({ node }, index) => {
    if (node.frontmatter.path) {
      console.log(`++ creating mdx page ${node.frontmatter.path} ${node.id}`)
      createPage({
        // This is the path
        path: node.frontmatter.path,
        // This component will wrap our MDX content
        component: path.resolve(`./src/templates/mdx-post.js`),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      })
    } else {
      console.log(`++ not creating: ${node.id}`)
    }
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      tags: [String!]!,
      draft: String,
      description: String,
      title: String,
      image: String,
      images: [String],
      path: String,
      gumroadPath: String,
      type: String,
      note: String,
      author: String
    }
  `
  createTypes(typeDefs)
}
// src/components/layout.js
import React from "react"
import SLink from "../components/SLink.js"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from '@mdx-js/react'
import Layout from "../layouts/layout.js";
import {Link} from "gatsby";

// simple template for testing
// export default function PageTemplate({ data: { mdx } }) {
//   return (
//     <div>
//       <h1>{mdx.frontmatter.title}</h1>
//       <MDXProvider components={{
//             "SLink": SLink,
//             "Carousel": Carousel,
//             "img": props => <img {...props} className="imgComp" style={{ border: "3px solid green" }} />
//           }}>
//           <MDXRenderer >{mdx.body}</MDXRenderer>
//       </MDXProvider>
//     </div>
//   )
// }

export default function MdxTemplate({ data: { mdx  }}) {
    const post = mdx
    var siteTitle = "notplants.info"
    var pageType = post.frontmatter.type;
    if (!pageType) {
      pageType = 'blog;'
    }
    var noHeader = false;
    if (pageType === 'blog') {
      noHeader = true;
    }
    return (
      <Layout noHeader={noHeader} pageType={pageType}>
        <article className={"markdownWrapper"}>
          <div className="articleHeader" style={{'margin-bottom': '20px', 'width': '100%', 'float':'left'}}>
            <h2
              style={{
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h2>
            <p
              style={{
                display: `block`,
                'width': '100%',
                'float': 'left'
              }}
            >
              {post.frontmatter.date}
            </p>
            {post.frontmatter.note ?
              <p
                style={{
                  display: `block`,
                }}
                dangerouslySetInnerHTML={{'__html': post.frontmatter.note}}
              >
              </p>
              : null}
          </div>
          <section className="mdxWrapper">
            <MDXProvider components={{
                  "SLink": SLink,
                }}>
                <MDXRenderer >{mdx.body}</MDXRenderer>
            </MDXProvider>
          </section>
        </article>
      </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        type
      }
    }
  }
`
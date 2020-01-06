// src/components/layout.js
import React from "react"
import SLink from "../components/SLink.js"
import Zine from "../components/Zine.js"
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

class MdxArticle extends React.Component {
  render() {
    return (
       <article className={"markdownWrapper"}>
          <div className="articleHeader" style={{'margin-bottom': '20px', 'width': '100%', 'float':'left'}}>
            <h2
              style={{
                marginBottom: 0,
              }}
            >
              {this.props.post.frontmatter.title}
            </h2>
            <p
              style={{
                display: `block`,
                'width': '100%',
                'float': 'left',
              }}
            >
              {this.props.post.frontmatter.author ? <span>{this.props.post.frontmatter.author} &bull;</span> : null } {this.props.post.frontmatter.date}
            </p>
            {this.props.post.frontmatter.note ?
              <p
                style={{
                  display: `block`,
                }}
                dangerouslySetInnerHTML={{'__html': this.props.post.frontmatter.note}}
              >
              </p>
              : null}
          </div>
          <section className="mdxWrapper">
            <MDXProvider components={{
                  "SLink": SLink,
                }}>
                <MDXRenderer >{this.props.mdx.body}</MDXRenderer>
            </MDXProvider>
          </section>
        </article>
    )
  }
}

export default function MdxTemplate({ data: { mdx  }}) {
    const post = mdx
    var pageType = post.frontmatter.type;
    if (!pageType) {
      pageType = 'blog;'
    }
    var noHeader = false;
    var hideFooter = false;
    if (pageType === 'blog') {
      noHeader = true;
    }
    if (pageType === 'zine') {
      hideFooter = true;
    }
    return (
      <Layout noHeader={noHeader} hideFooter={hideFooter} pageType={pageType} title={post.frontmatter.title} description={post.frontmatter.description} image={post.frontmatter.image}>
        {(()=> {
          switch (pageType) {
            case 'blog':
                return <MdxArticle post={post} mdx={mdx}></MdxArticle>;
            case 'zine':
              return <Zine zine={post.frontmatter} mdx={mdx}></Zine>
            default:
              return null;
          }
        })()}
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
        gumroadPath
        title
        description
        author
        image
        images
        price
        type
      }
    }
  }
`
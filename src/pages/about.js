import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/layout.js"
import SLink from "../components/SLink";

const IndexPage = () => (
  <Layout hideFooter={true}>
    <div className="aboutWrapper">
      <p>
        Canal Swans is a blog/website/publishing-platform/distribution-channel/online-retail-conglomerate maintained by <a href="http://mfowler.info">Max Fowler</a>.
      </p>
      {/*<p>*/}
      {/*  This is a blog for sharing writing, notes, sketches and other fragments.*/}
      {/*  <span style={{"margin-top": "10px", "display": "block"}}> Maintained by <a href="http://mfowler.info">Max Fowler</a>. </span>*/}
      {/*</p>*/}
      <div className="aboutLinks">
          <SLink className="hlink" to='/rss.xml'>rss</SLink>
          <SLink className="hlink" to='http://tinyletter.com/notplants/'>newsletter</SLink>
          <SLink className="hlink" to='http://twitter.com/notplants/'>twitter</SLink>
      </div>
    </div>
  </Layout>
)

export default IndexPage

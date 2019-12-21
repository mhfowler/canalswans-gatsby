import React from 'react'
import Link from 'gatsby-link'
import SLink from "./SLink";

const Footer = ({reversed}) => {
  return (
    <footer className="footer">
      <div className="footer-vertical">
        <div className="footer-top">
          <SLink style={{"color":"black", "margin-right": "15px"}} className="footer-center" to='/'>Canal Swans</SLink>
          <SLink className="hlink" to='/rss'>rss</SLink>
          <SLink className="hlink" to='http://tinyletter.com/notplants/'>newsletter</SLink>
          <SLink className="hlink" to='http://twitter.com/notplants/'>twitter</SLink>
        </div>
        <div className="footer-bottom">
            <SLink className="hlink" to='/about'>about</SLink>
            <SLink className="hlink" to='/'>index</SLink>
            <SLink className="hlink" to='/zines'>zines</SLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import Link from 'gatsby-link'
import Filler from './Filler.js'
import SLink from "./SLink";
var classNames = require('classnames')

const Footer = ({reversed}) => {
  return (
    <footer className="footer">
      <div className="footer-links-wrapper">
        <div>
          <SLink style={{"color":"black"}} className="hlink" to='/'>Canal Swans</SLink>
        </div>
        <div>
          {/*<SLink className="hlink" to='/about'>about</SLink>*/}
          {/*<SLink className="hlink" to='/rss'>rss</SLink>*/}
          {/*<SLink className="hlink" to='tinyletter.com/newsletter'>newsletter</SLink>*/}
          {/*<SLink className="hlink" to='/essays'>essays</SLink>*/}
          {/*<SLink className="hlink" to='/zines'>zines</SLink>*/}
        </div>
      </div>
    </footer>
  )
}

export default Footer

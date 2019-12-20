import React from 'react'
import Link from 'gatsby-link'
import SLink from "./SLink";
var classNames = require('classnames')

const Header = (props) => {
  return (
    <header className="simple-header">
      <div className="simple-vertical-flow">
        <div className="header-simple-top">
          <SLink to='/'>Canal Swans</SLink>
        </div>
        <div className="header-simple-bottom">
          <SLink to='/about'>about</SLink>
          <SLink to='/'>index</SLink>
          <SLink to='/zines'>zines</SLink>
        </div>
      </div>
    </header>
  )
}

export default Header

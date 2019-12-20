import React from 'react'
import Link from 'gatsby-link'
import SLink from "./SLink";

const Footer = ({reversed}) => {
  return (
    <footer className="footer">
      <SLink style={{"color":"black"}} className="hlink" to='/'>Canal Swans</SLink>
    </footer>
  )
}

export default Footer

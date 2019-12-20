import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
    <div className="navbar overlaid">
        <div className="myname">
            <a href="/">MAX FOWLER</a>
        </div>
        <div className="navlinks">
            <div className="navlink">
                <a href="/about.html">about</a>
            </div>
            <div className="navlink">
                <a href="/">work</a>
            </div>
            <div className="navlink">
                <a href="http://twitter.com/notplants">twitter</a>
            </div>
            <div className="navlink">
                <a href="http://github.com/mhfowler">github</a>
            </div>
            <div className="navlink">
                <a href="/notes.html">notes</a>
            </div>
            <div className="navlink last-navlink">
                <a href="/contact.html">contact</a>
            </div>
        </div>
    </div>
)

export default Header

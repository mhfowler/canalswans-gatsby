import React from 'react'
import Link from 'gatsby-link'
var classNames = require('classnames')

const Filler = () => {
  return (
    <div className="filler">
       <div>
          <p> test 100 </p>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
            <p>
          <Link to="/page-2/">Go to page 2</Link>
            </p>
            <p>
          <Link to="/page-2/">Go to page 2</Link>
            </p>
            <p>Now go build something great.</p>
                  <p>Welcome to your new Gatsby site.</p>
                  <p> test 100 </p>
        </div>
    </div>
  )
}

export default Filler

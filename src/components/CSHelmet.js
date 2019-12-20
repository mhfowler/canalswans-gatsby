import React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";
var classNames = require('classnames')

const CSHelmet = (props) => {
  return (
      <Helmet
          title="canalswans.info"
          meta={[
            {name: 'description', content: 'Canal Swans'},
            {name: 'keywords', content: 'freelance, art'},
          ]}
          bodyAttributes={{
            class: props.mood
          }}>
            <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet"/>
            <link rel="icon" href="/img/favico.ico" type="image/x-icon"/>
        </Helmet>
  )
}

export default CSHelmet

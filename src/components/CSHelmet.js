import React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";
var classNames = require('classnames')

const CSHelmet = (props) => {
  return (
      <Helmet
          title="canalswans.net"
          meta={[
            {name: 'description', content: 'an online-retail-conglomerate maintained by Max Fowler.'},
            {name: 'keywords', content: 'writing'},
          ]}
          bodyAttributes={{
            class: props.mood
          }}>
            <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet"/>
            <link rel="icon" href="/favico/favicon.ico" type="image/x-icon"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favico/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favico/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favico/favicon-16x16.png" />
            <link rel="manifest" href="/favico/site.webmanifest" />
        </Helmet>
  )
}

export default CSHelmet

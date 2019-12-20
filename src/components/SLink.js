import React from 'react'
import Link from 'gatsby-link'


function isExternal(url) {
  return /^https?:\/\//.test(url)
}

export default class LinkDuo extends React.Component {
  render() {
    return isExternal(this.props.to) ?
      <a
        href={this.props.to}
        {...this.props}
      />
      :
      <Link {...this.props} />;
  }
}
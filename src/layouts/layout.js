import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header.js'
import CSHelmet from '../components/CSHelmet.js'
import Footer from '../components/Footer.js'
import SLink from '../components/SLink.js'
import "./moods.scss"
import "./markdown.scss"
import "./canalswans.scss"

var classNames = require('classnames')

class Layout extends React.Component {

  constructor() {
    super();
    this.handleMoodClick = this.handleMoodClick.bind(this);
    this.state = {
      mood: 'standard'
    }
    this.handleMoodClick = this.handleMoodClick.bind(this)
  }

  handleMoodClick(mood) {
    this.setState({mood: mood})
  }

  render() {
    var wrapperClasses = `base-body ${this.state.mood} ${this.props.pageType}`
    return (
      <div className={wrapperClasses}>
        <CSHelmet mood={this.state.mood}/>
        <Header mood={this.state.mood} handleMoodClick={this.handleMoodClick}/>
        <div className="page-wrapper">
          <div className="main-wrapper">
            {this.props.children}
          </div>
        </div>
        {!this.props.hideFooter ? <Footer/> : null }
      </div>
    )
  }
}

export default Layout

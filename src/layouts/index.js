import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import SLink from '../components/SLink.js'
import "./index.scss"
import "./blog.scss"
import "./markdown.scss"
import "./canalswans.scss"

var classNames = require('classnames')


const MoodButton = ({mood, currentMood, handleMoodClick}) => {
  var classes = classNames({
    'mood-button': true,
    'clicked': mood === currentMood
  });
  return (
    <a className={classes} onClick={handleMoodClick.bind(this, mood)}>{mood}</a>
  )
}

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
        <Helmet
          title="mfowler.info"
          meta={[
            {name: 'description', content: 'Max Fowler | Freelancer'},
            {name: 'keywords', content: 'freelance, art'},
          ]}
          bodyAttributes={{
            class: this.state.mood
          }}
        />
        <link rel="stylesheet" type="text/css" charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet"/>
        <link rel="icon" href="/mfowler/img/favico.ico" type="image/x-icon"/>
        <div className="page-wrapper">
          <div className="main-wrapper">
            {this.props.children}
          </div>
        { !this.props.noMoodSelector &&
            <div>
              <div className="right-filler">
                  {/*<div>*/}
                  {/*  welcome to the website*/}
                  {/*</div>*/}
                  <div>
                    <SLink className="hlink" to='/about'>about</SLink>
                    {/*<SLink className="hlink" to='/rss'>rss</SLink>*/}
                    {/*<SLink className="hlink" to='tinyletter.com/newsletter'>newsletter</SLink>*/}
                    <SLink className="hlink" to='/essays'>essays</SLink>
                    <SLink className="hlink" to='/zines'>zines</SLink>
                  </div>
                  {/*<div>*/}
                  {/*  <SLink className="hlink" to='/essays'>rss</SLink>*/}
                  {/*  <SLink className="hlink" to='/zines'>newsletter</SLink>*/}
                  {/*</div>*/}
              </div>
              <div className="center-title">
                  Canal Swans
              </div>
              <div className="right-filler top-left">
                <div className="click-your-mood"> click your mood:</div>
                <MoodButton mood="standard" currentMood={this.state.mood} handleMoodClick={this.handleMoodClick} />
                <MoodButton mood="asmr" currentMood={this.state.mood} handleMoodClick={this.handleMoodClick} />
                <MoodButton mood="sponsored" currentMood={this.state.mood} handleMoodClick={this.handleMoodClick} />
                <MoodButton mood="test" currentMood={this.state.mood} handleMoodClick={this.handleMoodClick} />
              </div>
            </div>
        }
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Layout

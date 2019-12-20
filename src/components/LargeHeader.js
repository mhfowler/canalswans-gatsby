import React from 'react'
import Link from 'gatsby-link'
import SLink from "./SLink";
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

const Header = (props) => {
  return (
    <header>
      <div className="header-left">
        <div className="click-your-mood"> click your mood:</div>
        <MoodButton mood="standard" currentMood={props.mood} handleMoodClick={props.handleMoodClick} />
        <MoodButton mood="asmr" currentMood={props.mood} handleMoodClick={props.handleMoodClick} />
        <MoodButton mood="sponsored" currentMood={props.mood} handleMoodClick={props.handleMoodClick} />
        <MoodButton mood="test" currentMood={props.mood} handleMoodClick={props.handleMoodClick} />
      </div>
      <div className="header-center">
        Canal Swans
      </div>
      <div className="header-right">
        <div>
          <SLink className="hlink" to='/about'>about</SLink>
          <SLink className="hlink" to='/'>writing</SLink>
          <SLink className="hlink" to='/zines'>zines</SLink>
        </div>
      </div>
    </header>
  )
}

export default Header

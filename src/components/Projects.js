import React from 'react'
import Link from 'gatsby-link'
import Project from './Project'
import SimpleSite from './SimpleSite.js'

var classNames = require('classnames')


const Projects = () => {
  return (
    <div>
      <SimpleSite/>
      <div className="projects-wrapper">
          <Project
            project_title="What's On Your Mind?"
            project_image="/mfowler/img/thumbnails/woym-notebook.png"
            project_snippet="facebook statuses from the week after November 9th, 2016"
            project_tags="website, zine, reading"
            project_link="/work/whats-on-your-mind"
          />


    <Project
        project_title="Open Source Feeds"
        project_image="/mfowler/img/thumbnails/4-graphs.png"
        project_snippet="a workshop to create your own feed algorithm"
        project_tags="workshop, mac application"
        project_linktest="https://pioneerworks.org/classes/open-source-feeds/"
        project_link="https://pioneerworks.org/classes/open-source-feeds/"

    />

    <Project
        project_title="Infinite Wishing"
        project_image="/mfowler/img/thumbnails/iw-above.png"
        project_snippet='a wishing well'
        project_tags="installation, receipt printer"
        project_link="/work/infinite-wishing"

    />


    <Project
        project_title="Looking Glass"
        project_image="/mfowler/img/thumbnails/lg-test.png"
        project_snippet="a broken mirror"
        project_tags="installation, projection mapping"
        project_link="/work/looking-glass"

    />

    <Project
    project_title="Abridged Maps"
    project_image="/mfowler/img/thumbnails/abridged1.png"
    project_snippet="a twitter bot that strips Google Maps of all natural imagery"
    project_tags="website, twitter bot"
    project_link="http://mfowler.info/abridgedmaps/index.html"

    />

    <Project
    project_title="2 Pots"
    project_image="/mfowler/img/thumbnails/2pots1.png"
    project_snippet="a series of generative line drawings"
    project_tags="installation, open frameworks, arduino"
    project_link="/work/2pots"

    />

    <Project
    project_title="Oasis"
    project_image="/mfowler/img/thumbnails/oasis.png"
    project_snippet="a virtual reality commune only accessible by SSH"
    project_tags="installation, website, raspberry pi"
    project_link="/work/oasis"

    />

    <Project
    project_title="Memory Prosthetics"
    project_image="/mfowler/img/floppy_disk.jpg"
    project_snippet="what systems and thought-processes do you use to store & organize files/links/media?"
    project_tags="website"
    project_link="http://memoryprosthetics.net"

    />

    <Project
    project_title="HowDoISpeak"
    project_snippet="a website which shows you insights about the way you text by analyzing your word usage in your text messages"
    project_tags="website"
    project_image="/mfowler/img/thumbnails/hdis.png"
    project_link="http://howdoispeak.com"

    />

    <Project
    project_title="TrueSpeak"
    project_snippet="an app that allows you to upload your text message history to a publicly viewable page on the internet"
    project_tags="website"
    project_image="/mfowler/img/thumbnails/truespeak.png"
    project_link="http://brocascoconut.com/truespeak/"

    />

    <Project
    project_title="The Capitalist T-Shirt"
    project_snippet="an e-commerce store which sells t-shirts, framed prints and booty shorts"
    project_tags="website"
    project_image="/mfowler/img/thumbnails/capitalist.png"
    project_link="http://brocascoconut.com/the_capitalist_tshirt/"

    />

    <Project
    project_title="CSS Sketchbook"
    project_snippet="experiments in css"
    project_tags="website"
    project_image="/mfowler/img/thumbnails/post-content.png"
    project_link="http://mhfowler.github.io"

    />
      </div>
    </div>
  )
}

export default Projects

import React from 'react'
import SLink from './SLink.js'
import Img from "gatsby-image"
var classNames = require('classnames')



const Project = ({project_link, project_image, project_title, project_tags, project_snippet}) => {
  return (
    <div className="project-wrapper overlaid">
      <SLink to={project_link} className="project-image-wrapper">
          <img className="project-image" src={project_image}/>
      </SLink>
      <div className="project-description">
          <SLink className="project-title" to={project_link}>
              {project_title}
          </SLink>
           <div className="project-tags">
             {project_tags}
          </div>
          <div className="project-snippet">
              {project_snippet}
          </div>
      </div>
    </div>
  )
}

export default Project

import React from 'react'
import './Projects.css'

import SingleProject from '../SingleProject/SingleProject'

class Projects extends React.Component {
  render() {
    return (
      <div className='projects-container'>
        <h1>Projects</h1>
        <div className='project-section-container'>
          <SingleProject />
        </div>
      </div>
    )
  }
}

export default Projects
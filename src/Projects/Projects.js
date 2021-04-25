import React from 'react'
import './Projects.css'

class Projects extends React.Component {
  render() {
    return (
      <div className='projects-container'>
        <h1>Projects</h1>
        <div className='project-section-container'>
          <section className='project-section'>
            <h2>Project Name</h2>
            <p>Description....</p>
          </section>
        </div>
      </div>
    )
  }
}

export default Projects
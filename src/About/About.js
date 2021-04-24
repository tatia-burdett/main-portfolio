import React from 'react'
import './About.css'

class About extends React.Component {
  render() {
    return (
      <div className='about-container'>
        <h1>About Me</h1>
        <div className='about-sections-container'>

          <section className='about-section'>
            <h2>Software Developer</h2>
            <p>Why I choose to become a developer...</p>
          </section>

          <section className='about-section'>
            <h2>Travel</h2>
            <p>My love to travel...</p>
          </section>

          <section className='about-section'>
            <h2>Philosophy on Life</h2>
            <p>My passion to create a difference in the world, through art, design, technology, or just conversation</p>
          </section>

        </div>
      </div>
    )
  }
}

export default About
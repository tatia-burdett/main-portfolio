import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div className='about-container'>
        <h2>About Me</h2>
        <section className='about-section'>
          <h3>Software Developer</h3>
          <p>Why I choose to become a developer...</p>
          <h3>Travel</h3>
          <p>My love to travel...</p>
          <h3>Philosophy on Life</h3>
          <p>My passion to create a difference in the world, through art, design, technology, or just conversation</p>
        </section>
      </div>
    )
  }
}

export default About
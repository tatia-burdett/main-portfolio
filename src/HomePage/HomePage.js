import React from 'react'
import './HomePage.css'

import Me from '../images/me.jpg'

class HomePage extends React.Component {
  render() {
    return (
      <div className='homepage-container'>
        <header className='homepage-header'>
          <div className='image-container'>
            <h1>I am Tatia Burdett</h1>
            <p>Full Stack Web Developer</p>
          </div>
        </header>
        <section className='homepage-section'>
          <h2>Quick Take...</h2>
          <p>Hello World. I am Tatia Burdett, a full stack developer who lives life nomadically, currently living in Seattle. I am passionate about mental and physical health, sustainability, and personal growth. I am interested in helping to create a more accessible world, while inspiring people to make healthy choices and create lasting changes in our society. Technically speaking, I am experienced with HTML5, CSS, JavaScript ES6, jQuery, React, Express, PostgreSQL, and Node.js.</p>
          <blockquote>
            To be alive is to be in a constant state of change, the learning doesn't stop until I do.
          </blockquote>
        </section>
      </div>
    )
  }
}

export default HomePage
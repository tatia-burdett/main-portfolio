import React from 'react'
import './About.css'

import Me from '../images/me.jpg'
import Kenji from '../images/kenji.jpeg'

class About extends React.Component {
  render() {
    return (
      <div className='about-container'>
        <h1>About Me</h1>
        <div className='about-sections-container'>

          <section className='about-section'>
            <h2>This is me...</h2>
            <img src={Me} alt='blonde girl, blue eyes, dark background' className='image'/>
            <p>I first touched code when I was 15 years old (it was only HTML... shh!). This sparked a fire of curiosity in me, that kept me coming back. "Could I do this?", I always asked myself.</p>
            <p>I ended up pursuing nursing, and worked in a variety of health care facilities all over the US. Still, my passion for coding remained. I spent my weekends messing around learning CSS, and later on, JavaScript.</p>
            <p>Flash toward to 2020, I made the decision to take the leap and pursue coding full time.</p>
            <p>After a few months of independent study, I joined Bloc's Full Stack Flex Bootcamp (now currently owned by Thinkful). This bootcamp gave me the direction and mentorship I needed to stay on track, while challenging me to push myself in ways I haven't before.</p>
            <p>I'm currently seeking <strong>freelance</strong>, <strong>contract</strong>, or <strong>full time</strong> work. Most importantly, I'd desire to work on a team with other great programmers.</p>
          </section>

          <section className='about-section'>
            <h2>Adventure</h2>
            <img src={Kenji} alt='' className='image' />
            <p>I am passionate about seeing and experiencing all the different ways life can be lived. I allow this curiosity of the world to creep into my development and affect how and what I code.</p>
            <p>When I'm not coding, I'm usually creating music, learning more about photography, doing yoga, and exploring the world as much as humanly possible.</p>
          </section>

          <section className='about-section'>
            <h2>Philosophy on Life</h2>
            <p>My passion is to create a difference in the world through art, design, technology, and/or conversation. Please reach out to me for any reason!</p>
          </section>

        </div>
      </div>
    )
  }
}

export default About
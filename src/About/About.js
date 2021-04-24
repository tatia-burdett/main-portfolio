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
            <p>I first touched code when I was 15 years old (it was only HTML... shh!). This sparked a fire of curiosity in me, they kept me coming back. "Could I do this?", I always asked myself.</p>
            <p>I ended up pursuing nursing, and worked in a variety of health care facilties all over the US. Still, my passion for coding remained. I'd spend my weekends messing around learning CSS, and later on, JavaScript.</p>
            <p>Flash toward to 2020 and a global pandemic. I decided to study to become a software developer full time, while traveling the country with my travel-nurse husband.</p>
            <p>After a few months of independent study, I joined Bloc's Full Stack Flex Bootcamp (now currently owned by Thinkful). This bootcamp gave me the direction and mentorship I needed to stay on track, while challenging me to push myself in ways I haven't before.</p>
          </section>

          <section className='about-section'>
            <h2>Travel</h2>
            <img src={Kenji} alt='' className='image' />
            <p>I am a duel citizen (United States and Lithuania) and was raised moving at least once nearly every year. Some could say I'm addicted!</p>
            <p>I am passionate about seeing and experiencing all the different ways life can be lived. I allow this curiosity of the world to creep into my development and effect how and what I code.</p>
          </section>

          <section className='about-section'>
            <h2>Philosophy on Life</h2>
            <p>My passion to create a difference in the world, through art, design, technology, and/or conversation. Please reach out to me for any reason!</p>
          </section>

        </div>
      </div>
    )
  }
}

export default About
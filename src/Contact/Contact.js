import React from 'react'
import './Contact.css'

class Contact extends React.Component {
  render() {
    return (
      <div className='contact-container'>
        <h1>Contact</h1>
        <section className='contact-section'>
          <form action="https://formspree.io/f/xzbkaken " method="POST">
            <label htmlFor="user-name">Name:</label>
            <input id="user-name" type="text" name="name" placeholder="Enter your name" />

            <label htmlFor="user-email">Email:</label>
            <input id="user-email" type="text" name="email" placeholder="Enter your email" />

            <label htmlFor="user-message">Message:</label>
            <textarea id="user-message" name="message" placeholder="Enter a short message" />

            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    )
  }
}

export default Contact
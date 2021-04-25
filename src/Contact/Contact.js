import React from 'react'
import './Contact.css'

class Contact extends React.Component {
  render() {
    return (
      <div className='contact-container'>
        <h1>Contact</h1>
        <section className='contact-section'>
          <form>
            <label>Contact Me</label>
            <input />
            <button>Submit</button>
          </form>
        </section>
      </div>
    )
  }
}

export default Contact
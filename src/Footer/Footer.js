import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer-container'>
        <p>Copyright &#169; 2021</p>
        <p><a href="mailto:tatiaburdett@gmail.com" className='email'>Email Me</a></p>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/tatjanaburdett/'>
              <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
            </a>
          </li>
          <li>
            <a href='https://github.com/tatia-burdett'>
              <FontAwesomeIcon icon={faGithub} className='icon'/>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Footer
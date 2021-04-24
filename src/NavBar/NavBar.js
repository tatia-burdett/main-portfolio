import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar-container'>
        <h1><Link to='/' className='navbar-header'>TB</Link></h1>
        <ul className='navbar-menu'>
          <li className='navbar-list-item'>About</li>
          <li className='navbar-list-item'>Projects</li>
          <li className='navbar-list-item'>Photography</li>
          <li className='navbar-list-item'>Contact</li>
        </ul>
      </div>
    )
  }
}

export default NavBar
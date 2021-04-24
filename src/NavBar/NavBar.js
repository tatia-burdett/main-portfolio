import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar-container'>
        <h1 className='navbar-header'>TB</h1>
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
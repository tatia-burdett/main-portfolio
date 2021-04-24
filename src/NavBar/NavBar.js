import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar-container'>
        <h1><Link to='/' className='navbar-header'>TB</Link></h1>
        <ul className='navbar-menu'>
          <li className='navbar-list-item'>
            <Link to='/about'>About</Link>
          </li>
          <li className='navbar-list-item'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='navbar-list-item'>
            <Link to='/photography'>Photography</Link>
          </li>
          <li className='navbar-list-item'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar
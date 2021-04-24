import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar-container'>
        <div className='navbar-hamburger'>
          <label htmlFor='hamburger'>&#9776;</label>
          <input type="checkbox" id="hamburger"/>
          <div className='navbar-hamburger-items'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/photography'>Photography</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
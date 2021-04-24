import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css'

import NavBar from './NavBar/NavBar'
import HomePage from './HomePage/HomePage'
import About from './About/About'

class App extends React.Component {

  renderRoutes () {
    return (
      <Switch>
        <Route 
          exact
          path='/'
          component={HomePage}
        />
        <Route 
          path='/about'
          component={About}
        />
      </Switch>
    )
  }

  render() {
    return (
      <div>
        <nav>
          <NavBar />
        </nav>
        <main>
          {this.renderRoutes()}
        </main>
        <footer>
          {/* Need to make footer with LinkedIn, Github links */}
        </footer>
      </div>
    )
  }
}

export default App;
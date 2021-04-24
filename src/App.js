import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css'

import NavBar from './NavBar/NavBar'
import HomePage from './HomePage/HomePage'

class App extends React.Component {

  renderRoutes () {
    return (
      <Switch>
        <Route 
          exact
          path='/'
          component={HomePage}
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
      </div>
    )
  }
}

export default App;
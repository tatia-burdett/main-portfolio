import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css'
import PortfolioContext from './PortfolioContext'

import PROJECTS from './data/projectsData'
import NavBar from './NavBar/NavBar'
import HomePage from './HomePage/HomePage'
import About from './About/About'
import Projects from './Projects/Projects'
import ProjectPage from './ProjectPage/ProjectPage'
import Photography from './Photography/Photography'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'


class App extends React.Component {

  renderRoutes () {
    return (
      <Switch>
        <Route 
          exact
          path='/projects'
          component={Projects}
        />
        <Route 
          exact
          path='/'
          component={HomePage}
        />
        <Route 
          path='/about'
          component={About}
        />
        <Route 
          path='/projects/:id'
          component={ProjectPage}
        />
        <Route 
          path='/photography'
          component={Photography}
        />
        <Route 
          path='/contact'
          component={Contact}
        />
      </Switch>
    )
  }

  render() {
    const value = {
      PROJECTS: PROJECTS
    }

    return (
      <PortfolioContext.Provider value={value}>
        <div className='app-container'>
          <div className='app-full-screen'>
            <nav className='app-nav'>
              <NavBar />
            </nav>
            <main className='app-main'>
              {this.renderRoutes()}
            </main>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </PortfolioContext.Provider>
    )
  }
}

export default App;
import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioContext from '../PortfolioContext'
import './SingleProject.css'

class SingleProject extends React.Component {
  static contextType = PortfolioContext

  render() {
    const project = this.context.PROJECTS

    return (
      <section className='single-project-section'>
        {project.map(p => 
          <div className='single-project' key={p.id || ''}>
            <Link to={`/projects/${p.id}`}> 
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              {p.img1}
            </Link>
          </div>  
        )}
      </section>
    )
  }
}

export default SingleProject
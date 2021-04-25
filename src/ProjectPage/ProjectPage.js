import React from 'react'
import PortfolioContext from '../PortfolioContext'
import './ProjectPage.css'

class ProjectPage extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    },
    match: {
      params: {}
    }
  }

  static contextType = PortfolioContext

  render() {
    const project = this.context.PROJECTS
    const { id } = this.props.match.params
    const idInt = parseInt(id)

    const proj = project.find(project => project.id == idInt)

    return (
      <div className='project-page-container'>
        <button onClick={() => this.props.history.goBack()}>
          Go Back
        </button>
        <h1>{proj.title}</h1>
        <ul>
          <li>{proj.github}</li>
          <li>{proj.githubAPI}</li>
          <li>{proj.liveLink}</li>
        </ul>
        <p>{proj.description}</p>
        <section>
          {proj.img1}
          {proj.img2}
        </section>
      </div>
    )
  }
}

export default ProjectPage
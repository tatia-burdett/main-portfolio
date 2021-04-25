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
        <h1>{proj.title}</h1>
      </div>
    )
  }
}

export default ProjectPage
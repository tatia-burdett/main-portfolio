import React from 'react'
import './Photography.css'
import photos from '../data/photosData'

class Photography extends React.Component {
  render() {
    return (
      <div className='photography-container'>
        <h1>Photography</h1>
        <section className='photography-section'>
          {photos.map(p => 
            <div key={p.id}>
              {p.img}
            </div>  
          )}
        </section>
      </div>
    )
  }
}

export default Photography
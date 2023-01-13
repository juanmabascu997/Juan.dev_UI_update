import React from 'react'
import "./Projects.scss";
import Carrousel from '../components/Carrousel'

export default function Projects() {

  return (
      <div className='projects_container'>
        <div className='name_projects'>
          <h2 className='subtitles'>My projects 🚀</h2> <p>pss, make click in the project name to see more</p>
        </div>
        <div className='data_projects'>
          <Carrousel />
        </div>
      </div>
  )
}

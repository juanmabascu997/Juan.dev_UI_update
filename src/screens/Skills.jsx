import React from 'react'
import TecnoCarrusel from '../components/TecnoCarrusel'
import "./Skills.scss";

export default function Skills() {

  return (
        <div className='skills_container'>        
          <div className='name_projects'>
            <h2 className='subtitles name_home'>Skills ⚡</h2> <p>  list of skills in which I consider myself competent</p>
          </div>    
          <div className='info_skills'>
            <p>I consider myself a responsible person,
                with many skills to contribute to the
                team.
                I think that working as a team can
                achieve greater goals.
                I personally like to bring ideas and
                projects to life. <strong>Let creativity be visual.</strong> 
            </p>
          </div>    
          <div className='carrousel_home'>
            <TecnoCarrusel/>
          </div>
        </div>
  )
}

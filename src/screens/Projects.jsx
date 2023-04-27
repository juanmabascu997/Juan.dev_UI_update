import React from 'react'
import "./Projects.scss";
import CardProject from '../components/Card'
import data from '../components/assets/nombres.json'  

export default function Projects() {
  let imgs = data.Gallery;

  return (
      <div className='projects_container'>
        <div className='name_projects'>
          <h2 className='subtitles'>My projects 🚀</h2> <p>pss, make click in the project name to see more</p>
        </div>
        <div className='data_projects'>
          {imgs? imgs.map( (data , index) => {
            return <CardProject data={data} key={index}/>
          }):<></>}
          {/* <Carrousel /> */}
        </div>
      </div>
  )
}

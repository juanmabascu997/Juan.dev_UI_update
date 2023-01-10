import React from 'react'
import { useSelector } from 'react-redux';
import "./GlobalStyles.css";
import Carrousel from '../components/Carrousel'

export default function Projects() {
  const menu = useSelector(state => state.menu);

  return (<>
    {
      menu === 1 ? 
      <div className='projects_container'>
        <div className='name_projects'>
          <h1>Projects</h1>
        </div>
        <div className='data_projects'>
          <Carrousel />
        </div>
      </div>
      :
      <></>
    }
  </>
  )
}

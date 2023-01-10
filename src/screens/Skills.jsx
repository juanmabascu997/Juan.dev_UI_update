import React from 'react'
import { useSelector } from 'react-redux';
import TecnoCarrusel from '../components/TecnoCarrusel'
import "./GlobalStyles.css";

export default function Skills() {
  const menu = useSelector(state => state.menu);

  return (<>
    {
      menu === 2 ? 
        <div className='skills_container'>            
          <div className='carrousel_home'>
            <TecnoCarrusel/>
          </div>
        </div>
      :
      <></>
    }
  </>
  )
}

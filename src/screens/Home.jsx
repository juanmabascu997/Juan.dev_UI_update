import React from 'react'
import { useSelector } from 'react-redux';
import "./GlobalStyles.css";

export default function Home() {
  const menu = useSelector(state => state.menu);

  return (<>
    {
      menu === 0 ? 
        <div className='home_container'>
          <div className='name'>
            <h2 className='subtitles'>Hello there! &#129488;</h2>
            <div className='imagen'></div>
          </div>
          <div className='data'>
            <h1 className='name_home'>Juan Manuel Bascuñan</h1>
            <h2 className='title_home'>Front End Developer</h2>
            <p>I am a 25-year-old developer from San Luis, Argentina. I consider myself an adaptable, active, persistent and proactive; someone who focuses on a task and executes it effectively. I adapt easily to teamwork and their goals. I constantly look for continuous growth and to keep increasing my knowledge.</p>
          </div>
        </div>
      :
      <></>
    }
  </>
  )
}

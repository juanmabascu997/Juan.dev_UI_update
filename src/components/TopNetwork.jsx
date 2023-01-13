import React from 'react'
import './TopNetwork.scss'
import contact from './assets/contact.json'
import { IconButton, Tooltip } from '@mui/material';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import ContactButton from './ContactButton';

export default function TopNetwork() {
  const redes = contact.Contact;

  function onClickMannager (url) {
    window.open(url, '_blank', 'noreferrer')
  }

  return (
    <div className='top_container col-md-12'>
        <ContactButton />

        {
            redes ? redes.map((red, index) => {
                return (
                    <Tooltip title={red.name} key={index}>
                        <IconButton
                            size="large"
                            sx={{ ml: 2 }}
                            onClick={() => onClickMannager(red.url)}
                            key={index}
                        >   
                            {
                                red.name === "facebook" ? <AiOutlineFacebook/> :
                                red.name === "instagram" ? <AiOutlineInstagram/> :
                                red.name === "linkedin" ? <AiOutlineLinkedin/> :
                                red.name === "github" ? <AiOutlineGithub/> :
                                <></>
                            }
                        </IconButton>
                    </Tooltip>
                )
            })
            : <></>
        }
    </div>
  )
}

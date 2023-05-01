import React from 'react'
import Certificates from '../components/Certificates'
import './Footer.scss'


export default function Footer() {

  return (
    <div className='certificates_home '>
      <div>
        <p>Certificates and curriculum vitae 👇</p>
      </div>
      <Certificates/>
    </div>
  )
}

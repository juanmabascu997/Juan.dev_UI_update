import { Button } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Certificates.scss'

import henry from './assets/certificates/1.png';
import digitalUXUI from './assets/certificates/2.jpg';
import udemyVue from './assets/certificates/3.png';
import udemyFront from './assets/certificates/4.jpg';
import englishUba from './assets/certificates/5.PNG';

import cvespañol from './assets/cv/BascunanJuanCV_español.pdf';
import cvingles from './assets/cv/BascunanJuanCV_ingles.pdf';



const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#ff69b4',
      contrastText: '#fff',
    },
  },
});

export default function Certificates() {
  return (
    <div className='certificates_container'>
        <ThemeProvider theme={theme}>
            <Button variant="text" color='neutral' href={henry} download="Full Stack.png">
             Full Stack / Henry
            </Button>
            <Button variant="text" color='neutral' href={englishUba} download="English Certificate.png">
             English / UBA
            </Button>
            <Button variant="text" color='neutral' href={digitalUXUI} download="Digital Mind.jpg">
              UX UI / Digital Minds
            </Button>
            <Button variant="text" color='neutral' href={udemyFront} download="CSS.png">
              Master CSS / Udemy
            </Button>
            <Button variant="text" color='neutral' href={udemyVue} download="Vue JS.jpg">
              Vue JS / Udemy
            </Button>
            <div className="button_certificates">
              <Button variant="contained" color='neutral' href={cvespañol} download="BascuñanJuanManuelCV.pdf">
                CV Spanish
              </Button>
              <Button variant="contained" color='neutral' href={cvingles} download="BascuñanJuanManuelCV.pdf">
                CV English
              </Button>
            </div>
        </ThemeProvider>
    </div>
  )
}

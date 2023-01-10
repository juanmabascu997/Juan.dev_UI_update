import { Button } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Certificates.scss'

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
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export default function Certificates() {
    function onClickHandler() {

    } 

  return (
    <div className='certificates_container'>
        <ThemeProvider theme={theme}>
            <Button variant="outlined" color='neutral' onClick={onClickHandler}>
                Full Stack / Henry
            </Button>
            <Button variant="outlined" color='neutral'>
                Vue Js / Udemy
            </Button>
            <Button variant="outlined" color='neutral'>
                Master CSS / Udemy
            </Button>
        </ThemeProvider>
    </div>
  )
}

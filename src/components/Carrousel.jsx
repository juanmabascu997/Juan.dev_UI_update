import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import data from './assets/nombres.json'  
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './Carrousel.scss'

export default function Carrousel() {
  const [open, setOpen] = useState(false);
  const [imagenSelect, setImagenSelect] = useState({});

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  let imgs = data.Gallery;

  const onClickItemSelected = (e) => {
    setOpen(!open)
    setImagenSelect(e)
    console.log(e);
  }


  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
    <Carousel dynamicHeight showStatus={false} showIndicators={false} showThumbs={false}>
      {imgs? imgs.map( (img , index) => {
        return (
          <div key={index} onClick={()=>onClickItemSelected(img)}>
              <img 
                src={require(`${img.largeImage}?w=50&h=50&fit=crop&auto=format`)}
                srcSet={require(`${img.largeImage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`)}
                alt={index}
              />          
              <p className="legend">{img.title}</p>
          </div>
        )
      }) : null}
    </Carousel>
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <strong>{imagenSelect?.title}</strong>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Techs: {imagenSelect?.technology}
        </DialogContentText>
        <hr />
        <DialogContentText>
          {imagenSelect?.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </>
  )
}



import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import data from './assets/nombres.json'  

export default function Carrousel() {
  let imgs = data.Gallery;

  return (
    <Carousel>
      {imgs? imgs.map( (img , index) => {
        return (
          <div key={index}>
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
  )
}

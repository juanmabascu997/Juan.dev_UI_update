import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import data from './assets/icons.json' 

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVuejs } from 'react-icons/fa';
import { SiPostgresql } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiFirebase} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import "./TecnoCarrusel.scss";
import { motion } from "framer-motion";

export default function TecnoCarrusel() {
  let icons = data.Services;

  return (
    <>
      {icons? icons.map( (icon , index) => {
        return (
          <motion.button
            initial={{ transparency: 0 }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ transparency: 0 }}
            className='motionButton'
          >           
          <div key={index} className='card__tecno'>
                <p>{icon.title}</p>
                  {
                    icon.icon==='React' ?<><FaReact/> React</>  :
                    icon.icon==='HTML5' ? <><FaHtml5/> HTML</> :
                    icon.icon==='CSS' ? <><FaCss3Alt/> CSS</> :
                    icon.icon==='javascript' ? <><FaJsSquare/> JS</> :
                    icon.icon==='node.js' ? <><FaNodeJs/> Node JS</> :
                    icon.icon==='Git' ? <><FaGithub/> Git</>:
                    icon.icon==='SQL' ? <><SiPostgresql/> PostgreSQL</>:
                    icon.icon==='Figma' ? <><FaFigma/> Figma</>:
                    icon.icon==='Firebase' ? <><SiFirebase/> Firebase</>:
                    icon.icon==='Vue' ? <><FaVuejs/> Vue JS</>:
                    icon.icon==='Bootsrap' ? <><FaBootstrap/> Bootsrap</>
                    : null
                  }
            </div>
          </motion.button>
        )
      }) : null}
    </>
  )
}

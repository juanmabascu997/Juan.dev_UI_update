import './App.css';
import NavBar from './components/Navbar';
import { Grid } from '@mui/material'
import Home from './screens/Home'
import Projects from './screens/Projects'
import Skills from './screens/Skills'
import Footer from './screens/Footer';
import TopNetwork from './components/TopNetwork';
import { Route, Routes } from 'react-router';
import { motion } from 'framer-motion';

function App() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  return (
    <div id="container" className="contanier hiddeScroll">
      <div className='background'>
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
          className='background__motion'
        >
          <motion.circle
            cx="100"
            cy="500"
            r="80"
            stroke="#69a5ff"
            variants={draw}
            custom={1}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#ff69b4"
            variants={draw}
            custom={3}
          />
          <motion.line
            x1="220"
            y1="230"
            x2="360"
            y2="370"
            stroke="#ff69b4"
            custom={3}
            variants={draw}
          />
          <motion.line
            x1="220"
            y1="370"
            x2="360"
            y2="230"
            stroke="#ff69b4"
            custom={3.5}
            variants={draw}
          />

        </motion.svg>
      </div>
      <div className='item-c'>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8} sx={{ flexDirection: 'column' }}>
              <NavBar />
          </Grid>
        </Grid>
      </div>
      <div className='item-b'>
        <TopNetwork/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
       </Routes>
      </div>
      <div className='item-d'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

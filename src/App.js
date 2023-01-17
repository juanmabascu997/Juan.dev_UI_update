import './App.css';
import NavBar from './components/Navbar';
import { Grid } from '@mui/material'
import Home from './screens/Home'
import Projects from './screens/Projects'
import Skills from './screens/Skills'
import Footer from './screens/Footer';
import TopNetwork from './components/TopNetwork';
import { Route, Routes } from 'react-router';

function App() {

  return (
    <div id="container" className="contanier hiddeScroll">
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

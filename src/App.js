import './App.css';
import NavBar from './components/Navbar';
import { Grid } from '@mui/material'
import Home from './screens/Home'
import Projects from './screens/Projects'
import Skills from './screens/Skills'
import Footer from './screens/Footer';
  
function App() {

  return (
    <div className="contanier">
      <div className='item-c'>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8} sx={{ flexDirection: 'column' }}>
              <NavBar />
          </Grid>
        </Grid>
      </div>
      <div className='item-b'>
        <Home />
        <Projects/>
        <Skills/>
      </div>
      <div className='item-d'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

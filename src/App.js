import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    // <>
    //   <CssBaseline />
    //   <Navbar />
    //   <Home />
    //   <About />
    //   <Projects />
    //   <Contact />
    //   <Footer />
    // </>

    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element='' />
      </Routes>
    </Router>
  );
}

export default App;

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
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='portfolio/' element={<Home />} />
        <Route path='portfolio/home' element={<Home />}/>
        <Route path='portfolio/about' element={<About />}/>
        <Route path='portfolio/projects' element={<Projects />}/>
        <Route path='portfolio/contact' element={<Contact />}/>
        <Route path='*' element='' />
      </Routes>
    </Router>
  );
}

export default App;

import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar';
import Home from './Components/PageLand';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {/* <Home />
      <About />
      <Projects />
      <Contact />
      <Footer /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

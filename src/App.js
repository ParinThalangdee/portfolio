import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar';
import PageLand from './Components/PageLand';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <PageLand />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;

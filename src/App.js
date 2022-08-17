import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Tech from './Components/Tech';
import Projects from './Components/Projects';
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <About />
      <Tech />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

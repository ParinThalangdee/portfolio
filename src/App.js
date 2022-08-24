import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />

      {/* <Route>
        <Router path="/" component={<Home />} />
        <Router path="/" component={<About />} />
        <Router path="/" component={<Projects />} />
        {/* <Router path="/" component={<Contact />} />
      
      </Route> */}
    </>  
  );
}

export default App;

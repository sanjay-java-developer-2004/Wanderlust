import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Destinations from './Components/Destinations';
import Attractions from './Components/Attractions';
import Gallery from './Components/Gallery';
import TravelTips from './Components/TravelTips';
import BestTime from './Components/BestTime';
import Activities from './Components/Activities';
import Statistics from './Components/Statistics';
import Testimonials from './Components/Testimonials';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollTop from './Components/ScrollTop';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <Destinations darkMode={darkMode} />
      <Attractions darkMode={darkMode} />
      <Gallery darkMode={darkMode} />
      <BestTime darkMode={darkMode} />
      <TravelTips darkMode={darkMode} />
      <Activities darkMode={darkMode} />
      <Statistics darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <ScrollTop darkMode={darkMode} />
    </div>
  );
}

export default App;

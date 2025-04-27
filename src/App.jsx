import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certification from './components/Certification';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import { SnowOverlay } from 'react-snow-overlay';

function App() {
  return (
    <div className="bg-primary text-textPrimary font-poppins realtive">
      <div className='fixed top-0 right-0 bottom-0 left-0 z-0'>
      <SnowOverlay maxParticles={20} color={'yellow'} />;
      </div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience/>
      <Certification />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

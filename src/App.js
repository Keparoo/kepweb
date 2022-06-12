import React from 'react';

import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar2 />
      </header>

      <Container>
        <Hero />
        <ProjectList />
        <About />
        <Contact />
      </Container>

      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}

export default App;

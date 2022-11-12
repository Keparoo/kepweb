import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

import './App.css';

import { Container } from '@mui/material';

// Disable right click / long-press
// document.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
// });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main>
        <Container>
          <Hero />
          <ProjectList />
          <About />
          <Contact />
        </Container>
      </main>

      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}

export default App;

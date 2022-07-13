import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import About from '../src/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import './App.css';

import { Container } from '@mui/material';

// Disable right click / long-press
// document.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
// });

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
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
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList.js';
import Footer from './components/Footer';
import './App.css';

import { Container } from '@mui/material';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <Container>
        <Hero />
        <ProjectList />
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

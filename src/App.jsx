import React from 'react';

import NewNewNav from './components/NewNewNavbar/NewNewNav';
import Hero from './components/Hero/Hero';
import ProjectList from './components/Projects/ProjectList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Disable right click / long-press
// document.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
// });

function App() {
  return (
    <div className="App">
      <header>
        <NewNewNav />
      </header>

      <main className="container">
        <Hero />
        <ProjectList />
        <About />
        <Contact />
      </main>

      <footer className="container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

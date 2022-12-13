import React, { useRef, useEffect, useState } from 'react';

import NewNewNav from './components/NewNewNavbar/NewNewNav';
import Hero from './components/Hero/Hero';
import ProjectList from './components/Projects/ProjectList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { useScrollPosition } from './hooks/useScrollPosition';

// Disable right click / long-press
// document.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
// });

function App() {
  const heroRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const [sections, setSections] = useState({
    hero: true,
    projects: false,
    about: false,
    contact: false,
  });

  const scrollPosition = useScrollPosition() + 80;

  useEffect(() => {
    setSections({
      hero: scrollPosition < projectsRef.current.offsetTop,
      projects:
        scrollPosition > projectsRef.current.offsetTop &&
        scrollPosition < aboutRef.current.offsetTop,
      about:
        scrollPosition > aboutRef.current.offsetTop &&
        scrollPosition < contactRef.current.offsetTop,
      contact: scrollPosition > contactRef.current.offsetTop,
    });
  }, [scrollPosition]);

  return (
    <div className="App">
      <header>
        <NewNewNav sections={sections} />
      </header>

      <main className="container">
        <section ref={heroRef}>
          <Hero />
        </section>

        <section ref={projectsRef}>
          <ProjectList />
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </main>

      <footer className="container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

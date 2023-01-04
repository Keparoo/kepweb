import React, { useRef, useEffect, useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProjectList from './components/Projects/ProjectList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { useScrollPosition } from './hooks/useScrollPosition';
import { useStopAnimation } from './hooks/useStopAnimation';

// Disable right click / long-press
// document.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
// });

function App() {
  /* Track Y scrolling to determine which section is visible.
      Return an object with the current section in view as true
      All other sections as false */
  const heroRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const [visible, setVisible] = useState({
    hero: true,
    projects: false,
    about: false,
    contact: false,
  });

  const scrollOffset = 80;
  const scrollPosition = useScrollPosition() + scrollOffset;

  useEffect(() => {
    setVisible({
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

  useStopAnimation();

  return (
    <div className="App">
      <header>
        <Navbar visible={visible} />
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

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

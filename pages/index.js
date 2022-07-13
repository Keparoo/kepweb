import React from 'react';
import Head from 'next/head'

import Navbar from '../src/Navbar';
import Hero from '../src/Hero';
import ProjectList from '../src/ProjectList';
import About from '../src/About';
import Contact from '../src/Contact';
import Footer from '../src/Footer';

import { Container } from '@mui/material';

// Disable right click / long-press
// document.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
// });

export default function Home() {
  return (
    <div className="App">
    <Head>
      {/* Page Title, description, author and keywords */}
      <title>Kep Kaeppeler | Web Developer Portfolio Site</title>
      <meta name="description"
        content="Full stack web developer from Cape Cod, Massachusetts: information, portfolio, and resume site" />
      <meta name="keywords"
        content="HMTL, CSS, Javascipt, React, Redux, Node, Next.js, Python, SQL, Postgres, Web Developer, Full Stack, Cape Cod, Boston, Massachusetts" />
      <meta name="author" content="Kep Kaeppeler" />

      {/*  Open Graph Setup (Facebook, LinkedIn etc. ) fb:app_id tag only needed for websites that are facebook apps */}

      <meta property="og:type" content="website" />
      {/* title: 60-90 chars. More than 100 is truncated to 88 */}
      <meta property="og:title" content="Kep Kaeppeler Web Developer Portfolio" />
      {/* description approx 200 chars. (216 here) Facebook can display up to 300 */}
      <meta property="og:description"
        content="A full stack web developer living in Cape Cod, Massachusetts, who loves to capture the personality and flair of a client in the websites and printed materials that represent them. Information and project portfolio site." />
      <meta property="og:url" content="https://kepweb.dev" />
      {/* image should be 1.91:1 ratio and minimum dimensions of 1200x627 for optimal clarity across all devices <= 5MB */}
      <meta property="og:image" content="https://kepweb.dev/kepweb_og_home.jpg" />

      {/* Twitter Card Setup */}
      <meta name="twitter:card" content="summary_large_image" />
      {/*  title: up to 70 chars */}
      <meta name="twitter:title" content="Kep Kaeppeler Web Developer Portfolio" />
      <meta name="twitter:description"
        content="A full stack web developer living in Cape Cod, Massachusetts, who loves to capture the personality and flair of a client in the websites and printed materials that represent them. Information and project portfolio site." />
      {/* image: minimum 280x150px <= 1MB  */}
      <meta name="twitter:image" content="https://kepweb.dev/kepweb_og_home.jpg" />
      <meta name="twitter:image:alt" content="react code" />
      <meta name="twitter:url" content="https://kepweb.dev" />
      <meta name="twitter:site" content="@KepKaeppeler" />

    </Head>
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
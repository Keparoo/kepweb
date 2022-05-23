import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <Container>
          <Hero />
          <Projects />
        </Container>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList.js';
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
          <ProjectList />
        </Container>
      </body>

      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}

export default App;

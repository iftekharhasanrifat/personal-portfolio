import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="app-container">
      <Particles
        className='sticky-top'
        params={{
          "particles": {
            "number": {
              "value": 40
            },
            "size": {
              "value": 4
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
        height='50vh'
        style={{ position: 'absolute' }}
      />
      <div style={{ position: 'relative',zIndex:'20' }}>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Blogs></Blogs>
        <Contact></Contact>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;

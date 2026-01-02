import React, { useState, useEffect } from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Anakshiant</div>
          <ul className="nav-menu">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-cover"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-image-container">
            <img src="https://avatars.githubusercontent.com/u/15969483?v=4" alt="Anakshiant" className="hero-image" />
          </div>
          <h1 className="hero-title">Anakshiant</h1>
          <p className="hero-subtitle">Software Developer & Technology Enthusiast</p>
          <p className="hero-description">Building innovative solutions with modern technologies</p>
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/anakshiant/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://github.com/anand-paragon" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          </div>
        </div>
      </header>

      <main>
        <AboutMe />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;

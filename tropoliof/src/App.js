import React from 'react';
import './App.css';
import Nav from './components/Nav';
import HeaderSection from './components/HeaderSection';
import About from './components/About';
// Activities removed per user request
import Documentation from './components/Documentation'
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeaderSection />
      <main>
        <About />
        <Projects />
        <Documentation />
        <Philosophy />
        <Contact />
      </main>
    </div>
  );
}

export default App;

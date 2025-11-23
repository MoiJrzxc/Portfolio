import React from 'react';
import './App.css';
import Nav from './components/Nav';
import HeaderSection from './components/HeaderSection';
import About from './components/About';
import Activities from './components/Activities';
import Documentation from './components/Documentation';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeaderSection />
      <main>
        <About />
        <Activities />
        <Documentation />
        <Philosophy />
        <Contact />
      </main>
    </div>
  );
}

export default App;

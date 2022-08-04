import React from 'react';
import './App.css';
import Navbar from './components/ui/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;

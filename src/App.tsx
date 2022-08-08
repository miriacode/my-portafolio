import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './components/ui/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Testimonials from './pages/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Testimonials/>
            <Contact/>
            </>
          }></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

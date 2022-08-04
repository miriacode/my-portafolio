import React, { useEffect} from 'react'
import Navbar from '../../components/ui/Navbar/Navbar';
import About from '../About/About';
import Contact from '..//Contact/Contact';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import Projects from'..//Projects/Projects';
import Skills from '../Skills/Skills';
import Testimonials from '../Testimonials/Testimonials';


const Portafolio = ({props}:any) => {

    useEffect(() => {
        const hash = props.history.location.hash
        // Check if there is a hash and if an element with that id exists
        const el = hash && document.getElementById(hash.substr(1))
        if (el) {    
            el.scrollIntoView({behavior: "smooth"})
        }
    }, [props.history.location.hash]) // Fires every time hash changes

  return (
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
  )
}

export default Portafolio
import React from 'react'
import { AnimatedTitle } from '../../components/ui/Title/Title.style'
import { ProjectSection, ProjectCard } from './Projects.style'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {projects} from './../../data/projects'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <AnimatedTitle>Projects</AnimatedTitle>
      <Slider {...settings}>
        {projects.map((project:any)=>(
          <ProjectCard>
            <div>
              <img src={project}></img>
            </div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                 {project.technologies.map((tech:string)=>{
                  <div>{tech}</div>
                 })} 
              </div>
            </div>
          </ProjectCard>
        ))}

        
      </Slider>
    </ProjectSection>
  )
}

export default Projects
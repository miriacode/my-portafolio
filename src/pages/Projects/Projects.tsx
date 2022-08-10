import React from "react";
import { AnimatedTitle } from "../../components/ui/Title/Title.style";
import { ProjectSection, ProjectCard, TopSection, BottomSection,ProjectTitle, ProjectDescription, ProjectBox, ProjectTechnology} from "./Projects.style";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "./../../data/projects";
import j from './../../assets/images/project-images/money-tracker-app-image.jpg'

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
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <AnimatedTitle >Projects</AnimatedTitle>
      <Slider {...settings}>
        {projects.map((project: any) => (
          <ProjectCard>
            <TopSection src={project.image}>
            </TopSection>
            <BottomSection>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectBox>
                {/* {project.technologies.map((tech: string) => {
                  <li>{tech}</li>
                })} */}
                {/* {project.technologies.map((tech: string) => {
                  <ProjectTechnology>{tech}</ProjectTechnology>;
                })} */}
              </ProjectBox>
            </BottomSection>
          </ProjectCard>
        ))}
      </Slider>
    </ProjectSection>
  );
};

export default Projects;

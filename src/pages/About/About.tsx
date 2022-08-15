import React from 'react'
import { AboutSection, Paragraph } from './About.style'
import { AnimatedTitle } from "../../components/ui/Title/Title.style"
const About = () => {
  return (
    <AboutSection id="about">
      <AnimatedTitle>About</AnimatedTitle>
      <Paragraph>I'm Miriam Acuña. I'm from Lima, Peru. I'm passionate about web development, problem-solving and algorithms.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur necessitatibus quaerat perspiciatis, saepe, totam ea beatae voluptate autem ducimus sint ad ab voluptas culpa. Architecto nobis veritatis omnis reiciendis.
          Lorem ipsum dolor sit amet consectetur adipisic.
          orem, ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur necessitatibus quaerat perspiciatis, saepe, totam ea beatae voluptate autem ducimus sint ad ab voluptas culpa. Architecto nobis veritatis omnis reiciendis.
          Lorem ipsum dolor sit amet consectetur adipisic.
      </Paragraph>
    </AboutSection>
  )
}

export default About
import React from 'react'
import { AnimatedTitle } from '../../components/ui/Title/Title.style'
import { SkillsSection, SkillsContainer, Skill, SkillLogo, SkillLogoLarger, SkillLabel} from './Skills.style'

import htmlLogo  from './../../assets/images/html-logo.png'
import cssLogo  from './../../assets/images/css-logo.png'
import javascriptLogo  from './../../assets/images/javascript-logo.png'
import typescriptLogo  from './../../assets/images/typescript-logo.png'
import reactLogo  from './../../assets/images/react-logo.png'
import reduxLogo  from './../../assets/images/redux-logo.png'
import reactTestingLibraryLogo  from './../../assets/images/react-testing-library-logo.png'
import jestLogo  from './../../assets/images/jest-logo.png'
import sassLogo from './../../assets/images/sass-logo.png'
import tailwindLogo from './../../assets/images/tailwind-logo.png'
import nodeLogo from './../../assets/images/node-js-logo-dark-mode.png'
import expressLogo from './../../assets/images/express-logo.png'
import mongoDBLogo from './../../assets/images/mongodb-logo.png'
import javaLogo from './../../assets/images/java-logo.png'
import springLogo from './../../assets/images/spring-logo.png'

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <AnimatedTitle>Skills</AnimatedTitle>
      <SkillsContainer>
        <Skill>
          <SkillLogo src={htmlLogo}></SkillLogo>
          <SkillLabel>HTML</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={cssLogo}></SkillLogo>
          <SkillLabel>CSS</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={javascriptLogo}></SkillLogo>
          <SkillLabel>Javascrtipt</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={typescriptLogo}></SkillLogo>
          <SkillLabel>Typescrtipt</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={reactLogo}></SkillLogo>
          <SkillLabel>React</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={reduxLogo}></SkillLogo>
          <SkillLabel>REDUX</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={reactTestingLibraryLogo}></SkillLogo>
          <SkillLabel>TestingLibrary</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={jestLogo}></SkillLogo>
          <SkillLabel>Jest</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={sassLogo}></SkillLogo>
          <SkillLabel>SASS</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={tailwindLogo}></SkillLogo>
          <SkillLabel>Tailwind</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={nodeLogo}></SkillLogo>
          <SkillLabel>Node</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={expressLogo}></SkillLogo>
          <SkillLabel>Express</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={mongoDBLogo}></SkillLogo>
          <SkillLabel>Mongo DB</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={javaLogo}></SkillLogo>
          <SkillLabel>Java</SkillLabel>
        </Skill>
        <Skill>
          <SkillLogo src={springLogo}></SkillLogo>
          <SkillLabel>Springboot</SkillLabel>
        </Skill>
      </SkillsContainer>
    </SkillsSection>
  )
}

export default Skills
import styled from "styled-components";

export const ProjectSection = styled.section`
    padding-top:80px;
    padding-left:10%;
    padding-right:10%;
    height:100vh;
    position:relative;
`

export const ProjectCard = styled.article`
  /* background-color:peru; */
  border:1rem solid transparent;
  border-top:0;
  height:55vh;
  min-height:400px;
  overflow:hidden;
  border-radius:0 0 1.5rem 1.5rem;
`
export const TopSection = styled.div`
  height:42%;
  width:100%;
  background-color:blue;
  /* transition: transform .2s;
    &:hover{
        transform: scale(1.04);
    }
  display:flex;   */
  position:relative;
`
export const ProjectImg = styled.img`
  height:42%;
`

export const BottomSection = styled.div`
  background-color:var(--background-primary-color);
  
`
export const ProjectTitle = styled.h3`
  padding:0.8rem;
  
`
export const ProjectDescription = styled.p`
  text-align:justify;
  font-family:var(--font-family-secondary);
  font-size:1rem;
  font-weight:500;
  color:var(--hover-text-primary-color);
`

export const ProjectBox = styled.div`
  width:100%;
  height:30vh;
  background-color:yellow;
`

export const ProjectTechnology = styled.div`
  background-color:yellow;
`




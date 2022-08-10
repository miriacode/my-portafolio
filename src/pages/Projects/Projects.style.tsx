import styled from "styled-components";

export const ProjectSection = styled.section`
    padding-top:80px;
    padding-left:10%;
    padding-right:10%;
    height:100vh;
    position:relative;
`

export const ProjectCard = styled.article`
  background-color:peru;
  border:1rem solid var(--background-primary-color);
  height:54vh;
  min-height:300px;
  overflow:hidden;
  border-radius:0 0 1.5rem 1.5rem;
`
export const TopSection = styled.img`
  height:42%;
  transition: transform .2s;
    &:hover{
        transform: scale(1.04);
    }
    display:flex;  
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
  height:20vh;
  background-color:yellow;
`

export const ProjectTechnology = styled.div`
  background-color:yellow;
`




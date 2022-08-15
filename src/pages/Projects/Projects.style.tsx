import styled from "styled-components";

interface ProjectImgProps {
  readonly imgUrl: string;
};

export const ProjectSection = styled.section`
    padding-top:80px;
    padding-left:10%;
    padding-right:10%;
    height:100vh;
    position:relative;
    background-color:#334;
    @media (min-width: 1200px) {
      padding-top:35px;
  }
`
export const ProjectCard = styled.article`
  border:0.8rem solid transparent;
  border-top:0;
  height:60vh;
  min-height:400px;
  overflow:hidden;
  border-radius:0 0 1.5rem 1.5rem;
`


export const ButtonContainer = styled.div`
    width:100%;
    height:50px;
    padding-right:.5rem;
    display:flex;
    justify-content:flex-end;
    position:relative;
    top:-35px;
`
export const Link = styled.a`
    all:unset;
    cursor: pointer;
    border-left:6px solid transparent;
    transition: transform .2s;
    opacity:0.7;
    &:hover{
    transform: scale(1.05);
    opacity:1;
  }
`
export const Icon = styled.img`
    width:30px;
    height:30px;
    border-radius:0.25rem;
    background-color:white;
    z-index:5;
`



export const TopSection = styled.div`
  height:42%;
  width:100%;
  position:relative;
`
export const ProjectImg = styled.div<ProjectImgProps>`
  height:100%;
  width:100%;
  transition: transform .2s;
  z-index:-5;
  background: ${(props) => `url(${props.imgUrl})`}; 
  background-repeat: no-repeat;
  background-size: cover;

  &:hover{
    transform: scale(1.05);
  }
  &::before{
      /* content:'gggggggggggg';
      background-color: #FFBA10;
      position:relative;
      z-index:-3; */
    }
`

export const BottomSection = styled.div`
  background-color:var(--background-primary-color);
`
export const ProjectTitle = styled.h3`
  padding:0.8rem;
`
export const ProjectDescription = styled.p`
  padding-bottom:10px;
  text-align:justify;
  font-family:var(--font-family-secondary);
  font-size:1rem;
  font-weight:500;
  color:var(--hover-text-primary-color);
`
export const ProjectBox = styled.ul`
  width:100%;
  height:30vh;
 
  display:block;
  background-color:peru;
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(70px,1fr));
  
  align-content:start;
  gap:1vh;
  /* flex-direction:row;
  justify-content:space-between;

  flex-wrap: nowrap */
  @media (min-width: 1200px) {
    grid-template-columns:repeat(auto-fit, minmax(80px,1fr));
}

`
export const ProjectTechnology = styled.li`
/* width:33px;
height:33px;
  */
display:block;
  
  border-radius:0.25rem;
  background-color:purple; 
  
  height:25px;
  

  @media (min-width: 1200px) {
    height:28px;
}
`




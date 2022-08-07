import styled from "styled-components";
import { keyframes } from "styled-components";

export const AboutSection = styled.section`
    display:block;
    padding-top:100px;
`;

const gradient = keyframes`
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}
`;

export const Title = styled.h2`
    display:block;
    padding:1rem;
    font-size:xx-large;
    //Gradient Animated Text
    animation: ${gradient} 5s ease-in-out infinite;
    background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
    background-size: 300%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
`;

export const Paragraph = styled.p`
    height:80vh;
    padding:1.8rem 1rem;
    font-size:var(--paragraph-size-320);
    background-color:peru;

    @media (min-width: 500px) {
      height:auto;
    }
    @media (min-width: 700px) {
      font-size:var(--paragraph-size-700);
    }
    @media (min-width: 1200px) {
      font-size:var(--paragraph-size-1200);
      padding:1rem 18rem;
    }
    @media (min-width: 1800px) {
      font-size:var(--paragraph-size-1800);
      padding:1rem 25rem;
    }
    
`;
import styled from "styled-components";
import { keyframes } from "styled-components";

export const AboutSection = styled.section`
    display:block;
    /* background-color:pink; */
    padding-top:80px;
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
   
    animation: ${gradient} 5s ease-in-out infinite;
    background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
    background-size: 300%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
`;

export const Paragraph = styled.p`
    /* background-color:purple; */
    padding-top:80px;

    height:80vh;
    padding:1.8rem 1rem;
`;
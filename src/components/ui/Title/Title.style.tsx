import styled from "styled-components";
import { keyframes } from "styled-components";

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

export const AnimatedTitle = styled.h2`
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
    

    @media (min-width: 1200px) {
      /* font-size:var(--paragraph-size-1200);
      padding:1rem 18rem; */
      margin-top:15vh;
      border: 2px solid red;
    }
`;
import styled from "styled-components";


export const AboutSection = styled.section`
    display:block;
    padding-top:100px;
`;

export const Paragraph = styled.p`
    height:80vh;
    padding:1.8rem 1rem;
    font-size:var(--paragraph-size-320);

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
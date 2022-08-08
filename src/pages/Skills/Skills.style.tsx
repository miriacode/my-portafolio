import styled, {css} from "styled-components";

const hoverSkillLogo = css`
    transition: transform .2s;
    &:hover{
        transform: scale(1.15);
    }    
`
export const SkillsSection = styled.section`
    padding-top:80px;
    height:100vh;

    @media (min-width: 1200px) {
      padding:1rem 25rem;
    }
    @media (min-width: 1800px) {
      padding:1rem 30rem;
    }
`
export const SkillsContainer = styled.article`
    width:100%;
    height:auto;
    padding:0 5%;
    /*Grid*/
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(95px,1fr));
    grid-gap: 5% 2.5%;

    @media (min-width: 1800px) {
        grid-template-columns:repeat(auto-fit, minmax(115px,1fr));
    }

`
export const Skill = styled.div`
`

export const SkillLogo = styled.img`
    width:60%;
    height:60%;
    ${hoverSkillLogo}
`

export const SkillLogoLarger = styled.img`
    width:95px;
    height:60px;
    ${hoverSkillLogo}
`
export const SkillLabel = styled.p`
    font-weight:600;
    font-size:var(--paragraph-size-320);
`



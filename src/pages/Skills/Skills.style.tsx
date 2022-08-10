import styled, {css} from "styled-components";

const hoverSkillLogo = css`
    transition: transform .2s;
    &:hover{
        transform: scale(1.15);
    }    
`
export const SkillsSection = styled.section`
    display:block;
    height:725px;
    padding-top:80px;
    /* background-color:yellow; */

    @media (min-width: 1200px) {
      height:525px;
      padding-left: 25rem;
      padding-right: 25rem;
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
    align-items:center;

    @media (min-width: 1800px) {
        grid-template-columns:repeat(auto-fit, minmax(115px,1fr));
    }

`
export const Skill = styled.div`
`

export const SkillLogo = styled.img`
    width:52%;
    height:52%;
    ${hoverSkillLogo}
    @media (min-width: 1800px) {
        width:62%;
        height:62%; 
    }
`

export const SkillLogoLarger = styled.img`
    width:57%;
    height:52%;
    ${hoverSkillLogo}
    @media (min-width: 1800px) {
        width:67%;
        height:62%; 
    }
`
export const SkillLabel = styled.p`
    font-weight:600;
    font-size:var(--paragraph-size-320);
`



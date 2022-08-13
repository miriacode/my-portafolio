import React from 'react'
import githubLogo from './../../../assets/images/github-logo.png'
import externalLinkLogo from './../../../assets/images/external-link-logo.png'
import styled from "styled-components";

export const Link = styled.a`
    width:20px;
    height:20px;
    background-color:green;
    z-index:5;
`
export const Icon = styled.img`
    width:30px;
    height:30px;
    border-radius:0.25rem;
    background-color:white;
    z-index:5;
`

export const ButtonContainer = styled.div`
    /* width:30px;
    height:30px;
    border-radius:0.25rem;
    background-color:white;
    z-index:5; */
    width:100%;
    height:30px;
    background-color:pink;
    position:absolute;
    display:flex;
    justify-content:space-between;
    
`

const GithubButtons = ({githubUrl, demoUrl}:any) => {
  return (
    <ButtonContainer>
      <Link href={githubUrl}>
          <Icon src={githubLogo} alt="github-logo"></Icon>
      </Link>
      <Link href={demoUrl}>
          <Icon src={externalLinkLogo} alt="githubs-logo"></Icon>
      </Link>    
    </ButtonContainer>
  )
}

export default GithubButtons
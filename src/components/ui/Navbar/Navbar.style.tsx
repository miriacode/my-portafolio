import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

interface NavbarContainerProps {
  readonly extendNavbar: boolean;
};

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  width: 100%;
  height: ${(props) => (props.extendNavbar? "100vh" : "80px")};
  padding:1rem 0.8rem;
  background-color: var(--background-primary-color);
  font-family:var(--font-family-primary);
  color: var(--text-primary-color);
  display: flex;
  flex-direction: column;
  position:sticky;
  top:0;
  z-index:2;
  @media (min-width: 700px) {
    height: 80px;
  }
  @media (min-width: 1200px) {
    padding:1rem 10rem;
  }
  @media (min-width: 1800px) {
    padding:1rem 12rem;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  align-items:center;
  padding-right: 50px;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content:flex-end;
  align-items:center;
  padding-left: 5%;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(HashLink)`
  color: var(--text-primary-color);
  font-size:large;
  font-weight:600;
  text-decoration: none;
  margin: 0.9rem;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.h1`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const OpenLinksButton = styled.button`
  all:unset;
  color: var(--text-primary-color);
  width: 70px;
  height: 60px;
  background: none;
  border: none;
  font-size: xx-large;
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(HashLink)`
  color: var(--text-primary-color);
  font-size: 1.2rem;
  text-decoration: none;
  margin: 1.2rem;
  color: var(--text-primary-color);
  transition: transform .3s;;
  &:hover{
    transform: scale(1.12);
  }
  &:active{
    color:var(--hover-text-primary-color);
  }
`;
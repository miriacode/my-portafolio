import React, { useState} from "react";
// import { Link } from "react-router-dom";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Navbar.style";
import LogoImg from "../../../assets/images/logo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

 
  //  const handleClick = () => {
  //     window.scrollTo(0, myRef.current.offsetTop)
  //  }

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to={{ pathname: "/", hash: "#home" }}>Home</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#about" }}>About</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#skills" }}>Skills</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#projects" }}>Projects</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#experience" }}>Experience</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#testimonials" }}> Testimonials</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#contact" }}>Contact</NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#home" }}>Home</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#about" }}>About</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#skills" }}>Skills</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#projects" }}>Projects</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#experience" }}>Experience</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#testimonials" }}> Testimonials</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#contact" }}>Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
import React, {useState} from "react";

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

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleExtendNavBar = () =>{
    setExtendNavbar((curr) => !curr);
  }

  const logoName = `{miriacode}`

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      {/* Mobile/Web Franja */}
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo>{logoName}</Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to={{ pathname: "/", hash: "#home" }}>Home</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#about" }}>About</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#skills" }}>Skills</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#projects" }}>Projects</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#experience" }}>Experience</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#testimonials" }} >Testimonials</NavbarLink>
            <NavbarLink to={{ pathname: "/", hash: "#contact" }}>Contact</NavbarLink>
            <OpenLinksButton
              onClick={handleExtendNavBar}>
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      
      {/* Mobile Desplegado */}
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#home" }} onClick={handleExtendNavBar}>Home</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#about" }} onClick={handleExtendNavBar}>About</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#skills" }} onClick={handleExtendNavBar}>Skills</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#projects" }} onClick={handleExtendNavBar}>Projects</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#experience" }} onClick={handleExtendNavBar}>Experience</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#testimonials" }} onClick={handleExtendNavBar}> Testimonials</NavbarLinkExtended>
          <NavbarLinkExtended to={{ pathname: "/", hash: "#contact" }} onClick={handleExtendNavBar}>Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
import React from "react";
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { css } from "styled-components/macro";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/LOGO_COULEUR.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  fixed top-0 left-0 right-0 z-50 bg-white
  flex justify-between items-center pt-4
  max-w-screen-xl mx-4 md:mx-auto
`;

export const NavLinks = tw.div`inline-block`;

const StyledHashLink = tw(HashLink)`
  text-lg text-secondary-200 my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-red-500 hocus:text-red-500
`;

export const LogoLink = styled(StyledHashLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;

export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({ logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

  const defaultLinks = [
    <NavLinks key={1}>
      <StyledHashLink smooth to="/#home" onClick={toggleNavbar}>Accueil</StyledHashLink>
      <StyledHashLink smooth to="/#missions" onClick={toggleNavbar}>Missions</StyledHashLink>
      <StyledHashLink smooth to="/#about" onClick={toggleNavbar}>Expertise</StyledHashLink>
      <StyledHashLink smooth to="/#steps" onClick={toggleNavbar}>Process</StyledHashLink>
      <StyledHashLink smooth to="/#values" onClick={toggleNavbar}>Valeurs</StyledHashLink>
      <StyledHashLink smooth to="/#returns" onClick={toggleNavbar}>Témoignages</StyledHashLink>
      <StyledHashLink smooth to="/contact" onClick={toggleNavbar}>Contact</StyledHashLink>
    </NavLinks>,
  ];

  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink smooth to="/" onClick={toggleNavbar}>
      <img src={logo} alt="logo" style={{ width: 300 }} />
    </LogoLink>
  );

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink || defaultLogoLink}
        {links || defaultLinks}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink || defaultLogoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links || defaultLinks}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};

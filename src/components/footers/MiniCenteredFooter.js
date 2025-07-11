import React from "react";
import { Link as RouterLink } from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/LOGO_COULEUR.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";

const Container = tw(ContainerBase)`bg-white shadow-raised text-secondary-200 `;
const Content = tw.div`max-w-screen-xl text-center mx-4 md:mx-auto lg:py-8`;

const Row = tw.div`flex items-center justify-between`;

const LogoContainer = tw.div`flex items-center md:justify-start`;

const LinksContainer = tw.div`mt-4 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw(RouterLink)`border-b-2 border-transparent hocus:text-secondary-200 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-5`;
const TechnoText = tw.a`mt-4 text-sm text-gray-400 text-center`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-secondary-200 hover:text-red-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

export default () => {
  console.log("test")
  return (
    <Container>
      <Content>
        <Row>
          {/* Bloc gauche : Logo */}
          <LogoContainer>
            <img src={logo} alt="logo" style={{ width: 200 }} />
          </LogoContainer>

          {/* Bloc central : Liens + texte */}
          <div className="flex flex-col items-center">
            <LinksContainer>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/legalnotices">Mentions Légales</Link>
              <Link to="/policy">Politique de Confidentialité</Link>
            </LinksContainer>
            {/* Texte parfaitement aligné avec les liens */}
            <TechnoText>
              © 2023 Adrien Neyron — Développé avec React, Tailwind CSS et Webpack
            </TechnoText>
          </div>

          {/* Bloc droit : Réseaux sociaux */}
          <SocialLinksContainer>
            <SocialLink
              href="https://www.linkedin.com/in/carole-forestier/"
              target="_blank"
            >
              <LinkedinIcon />
            </SocialLink>
          </SocialLinksContainer>
        </Row>
      </Content>
    </Container>
  );
};

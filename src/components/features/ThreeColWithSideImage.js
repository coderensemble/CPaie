import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
// eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

// Import des SVG comme composants React
import { ReactComponent as ShieldIcon } from "images/shield-icon.svg";
import { ReactComponent as SupportIcon } from "images/support-icon.svg";
import { ReactComponent as CustomizeIcon } from "images/customize-icon.svg";
import { ReactComponent as FastIcon } from "images/fast-icon.svg";
import { ReactComponent as ReliableIcon } from "images/reliable-icon.svg";
import { ReactComponent as SimpleIcon } from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-4 md:mx-auto py-4`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}

  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    svg {
      ${tw`w-6 h-6 text-primary-500`} /* couleur par défaut */
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-black leading-loose`}
  }
`;

export default ({
  id,
  cards = null,
  heading = "Amazing Features",
  subheading = "Features",
  description = "Entrepreneur en gestion de paie, je vous propose des solutions personnalisées pour simplifier vos processus, assurer la conformité réglementaire et optimiser votre gestion sociale."
}) => {
  const defaultCards = [
    {
      Icon: ShieldIcon,
      title: "Externalisation Paie & Social",
      description: "Services d'externalisation complets pour soulager les entreprises de la charge administrative liée à la paie et aux aspects sociaux."
    },
    {
      Icon: SupportIcon,
      title: "Remplacement Sur Mesure",
      description: "Un service de remplacement sur mesure pour les entreprises ayant besoin d'une assistance temporaire ou ponctuelle dans leur service de paie."
    },
    {
      Icon: CustomizeIcon,
      title: "Accompagnement De Projet",
      description: "Offrir un soutien expert et personnalisé tout au long du processus de gestion de paie, en guidant les clients à travers les différentes étapes et en garantissant une implémentation réussie des projets."
    },
    {
      Icon: ReliableIcon,
      title: "Maîtrise des Outils et Technologies",
      description: "Utiliser une expertise approfondie des logiciels de gestion de paie et des technologies connexes pour optimiser les processus et assurer une gestion efficace et précise de la paie."
    },
    {
      Icon: FastIcon,
      title: "Veille Réglementaire et Conformité",
      description: "Assurer une surveillance constante des évolutions légales et réglementaires dans le domaine de la paie, en garantissant que les pratiques restent toujours conformes aux exigences légales en vigueur."
    },
    {
      Icon: SimpleIcon,
      title: "Service Client et Relationnel",
      description: "Fournir un service client en établissant des relations de confiance avec les clients, en comprenant leurs besoins spécifiques et en offrant des solutions adaptées."
    }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container href={id}>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <card.Icon className="w-6 h-6 text-red-500" style={{ color: 'rgba(239, 68, 68, 1)' }}/>
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};

import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "Privacy Policy" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <h1>Mentions légales</h1>

            <h2>Éditeur du site</h2>
            <p>
              <strong>Raison sociale :</strong> C+PAIE
              <br />
              <strong>Forme juridique :</strong> SARL
              <br />
              <strong>Capital social :</strong> 1 000 €
              <br />
              <strong>Adresse du siège :</strong> 1435 Route de la barliette 74300 Araches la Frasse
              <br />
              <strong>Numéro SIRET :</strong> 123 456 789 00017
              <br />
              <strong>RCS :</strong> Paris B 123 456 789
              <br />
              <strong>TVA intracommunautaire :</strong> FR12 123456789
              <br />
              <strong>Directrice :</strong> Mme Carole Forestier
              <br />
              <strong>Contact :</strong> carol.forestier@gmail.com
            </p>

            <h2>Hébergement</h2>
            <p>
              <strong>Nom de l’hébergeur :</strong> Vercel Inc.
              <br />
              <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              <br />
              <strong>Site web :</strong> <a href="https://vercel.com">https://vercel.com</a>
            </p>

            <h2>Conditions d’utilisation</h2>
            <p>
              Le présent site est accessible à tout moment aux utilisateurs. Il est mis à jour régulièrement par [Nom de
              la société]. Le site a pour objet de fournir des informations sur les services de consulting en paie
              proposés par l’entreprise.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              Tous les éléments du site (textes, images, logo, etc.) sont la propriété exclusive de [Nom de la société],
              sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation est
              interdite.
            </p>

            <h2>Gestion des données personnelles</h2>
            <p>
              Ce site collecte des données via les formulaires de contact. Les informations recueillies sont réservées à
              un usage interne. Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de
              suppression de vos données. Pour toute demande, contactez-nous à :{" "}
              <a href="mailto:carol.forestier@gmail.com">carol.forestier@gmail.com</a>.
            </p>

            <h2>Cookies</h2>
            <p>
              Le site peut utiliser des cookies à des fins statistiques ou pour améliorer l’expérience utilisateur. Vous
              pouvez configurer votre navigateur pour les refuser.
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};

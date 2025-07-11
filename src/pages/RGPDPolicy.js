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
  ${tw`text-lg text-gray-800`}
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

export default ({ headingText = "Politique de confidentialité (RGPD)" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Dernière mise à jour : 9 juillet 2025</p>

            <h1>Politique de confidentialité – Conformité RGPD</h1>
            <p>
              Cette page vous informe de nos politiques concernant la collecte, l'utilisation et la divulgation des
              données personnelles lorsque vous utilisez notre site internet, ainsi que des droits dont vous disposez en
              vertu du Règlement Général sur la Protection des Données (RGPD).
            </p>

            <h2>Identité du responsable du traitement</h2>
            <p>
              <strong>Nom :</strong> Carole Forestier – Consultante indépendante en paie
              <br />
              <strong>Email :</strong> carol.forestier@gmail.com
              <br />
              <strong>SIRET :</strong> [à compléter]
              <br />
              <strong>Adresse :</strong> [à compléter]
            </p>

            <h2>Finalités du traitement</h2>
            <p>
              Les données personnelles collectées via le formulaire de contact ou lors de la navigation sur le site
              peuvent être utilisées pour :
            </p>
            <ul>
              <li>Répondre à vos demandes de renseignements ou devis</li>
              <li>Suivre la relation commerciale</li>
              <li>Améliorer la navigation et l’expérience utilisateur</li>
            </ul>

            <h2>Types de données collectées</h2>
            <p>Les données suivantes peuvent être collectées :</p>
            <ul>
              <li>Nom, prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Code siret</li>
              <li>Convention d'entreprise</li>
              <li>Message</li>
              <li>Données de navigation (cookies, adresse IP, etc.)</li>
            </ul>

            <h2>Base légale du traitement</h2>
            <p>Les traitements reposent sur :</p>
            <ul>
              <li>Votre consentement (formulaire de contact)</li>
              <li>L’intérêt légitime de l’activité (suivi des échanges professionnels)</li>
              <li>Le respect d’obligations légales (comptabilité, archivage, etc.)</li>
            </ul>

            <h2>Durée de conservation</h2>
            <p>
              Les données sont conservées pendant la durée nécessaire à la finalité du traitement, sauf obligation
              légale :
            </p>
            <ul>
              <li>3 ans après le dernier contact pour les prospects</li>
              <li>10 ans pour les documents comptables</li>
            </ul>

            <h2>Partage des données</h2>
            <p>
              Les données ne sont en aucun cas vendues à des tiers. Elles peuvent être transmises à des prestataires
              techniques pour l’hébergement ou le bon fonctionnement du site, dans le respect du RGPD.
            </p>

            <h2>Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>VERCEL</strong> – Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA –{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Politique de confidentialité
              </a>
            </p>

            <h2>Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d’accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l’effacement (« droit à l’oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d’opposition</li>
            </ul>
            <p>
              Vous pouvez exercer vos droits en envoyant un email à : <strong> carol.forestier@gmail.com</strong>
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies à des fins de mesure d’audience et d’amélioration de l’expérience utilisateur.
              Vous pouvez les accepter, les refuser ou les configurer via le bandeau de gestion des cookies affiché lors
              de votre première visite.
            </p>

            <h2>Sécurité</h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour protéger vos
              données personnelles contre l’accès non autorisé, la divulgation, la perte ou la destruction.
            </p>

            <h2>Modification de la politique</h2>
            <p>
              Nous nous réservons le droit de modifier la présente politique de confidentialité. En cas de modification
              majeure, un message d’information sera diffusé sur le site.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter :
            </p>
            <ul>
              <li>Par email : carol.forestier@gmail.com</li>
              <li>Par courrier : [Adresse complète]</li>
            </ul>
            <p>
              Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};

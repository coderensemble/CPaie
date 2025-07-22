import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { motion } from "framer-motion";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import heroScreenshotImageSrc from "images/carole.jpeg";
import macHeroScreenshotImageSrc from "images/team-illustration.svg";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-red-500`;
  const HighlightedText = tw.span`text-secondary-200`;

  return (
    <>
      <Hero id="home" roundedHeaderButton={true} />

      <motion.div
        id="missions"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        <Features
          subheading={<Subheading>MISSIONS</Subheading>}
          heading={
            <>
              Mes <HighlightedText>Services.</HighlightedText>
            </>
          }
        />
      </motion.div>
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        <MainFeature
          subheading={<Subheading>QUALITE DU TRAVAIL</Subheading>}
          imageSrc={heroScreenshotImageSrc}
          imageBorder={true}
          imageDecoratorBlob={true}
        />
      </motion.div>
      <motion.div
        id="steps"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        <FeatureWithSteps
          subheading={<Subheading>ETAPES</Subheading>}
          heading={
            <>
              Facile de <HighlightedText>Travailler Ensemble.</HighlightedText>
            </>
          }
          textOnLeft={false}
          imageSrc={macHeroScreenshotImageSrc}
          imageDecoratorBlob={true}
          decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
        />
      </motion.div>
      <motion.div
        id="values"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        <MainFeature2
          id="values"
          subheading={<Subheading>VALEURS</Subheading>}
          heading={
            <>
              Je respecte toujours <HighlightedText>Mes Principes.</HighlightedText>
            </>
          }
          imageSrc={prototypeIllustrationImageSrc }
          showDecoratorBlob={false}
          features={[
            {
              Icon: MoneyIcon,
              title: "Abordable",
              description: "Je m'engage à vous offrir le meilleur tarif possible.",
              iconContainerCss: tw`bg-red-500 text-black`,
            },
            {
              Icon: BriefcaseIcon,
              title: "Professionnalisme",
              description:
                "Précision impeccable, conformité rigoureuse aux réglementations et service client exemplaire.",
              iconContainerCss: tw`bg-red-500 text-black`,
            },
          ]}
        />
      </motion.div>
      <motion.div
        id="returns"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        <Testimonial
          subheading={<Subheading>TEMOIGNAGES</Subheading>}
          heading={
            <>
              Ma relation <HighlightedText>avec les clients.</HighlightedText>
            </>
          }
          testimonials={[
            {
              profileImageSrc:
                "https://media.licdn.com/dms/image/v2/D4D03AQHXj--NI7bN9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708356619287?e=1757548800&v=beta&t=i4sXV-R1yh3t8szbE8ppn1n56uoZuAp2W9RRJ0FJ0iA",
              heading: "LE PACK",
              quote:
                "Grâce à Carole, nous avons enfin trouvé la relation de proximité qui nous manquait avec notre précédent expert paie. Compétente, disponible et réactive, nous avons l'impression qu'elle fait partie intégrante de la société.",
              customerName: "Sybille du Peloux",
              customerTitle: "Co-gérante",
            },
            {
              profileImageSrc:
                "https://media.licdn.com/dms/image/v2/C4E03AQHaAqbESyJutQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517536162119?e=1757548800&v=beta&t=wCSfckl_vz7xs0vbJ9wPnoSQUz1j74SZOmnB087cT-M",
              heading: "VERTYCAL",
              quote:
                "Responsable paie à temps partagé Carole est trés appréciée de ses équipes par sa disponibilité et sa capacité à les faire progresser. Elle est force de proposition et de conseils. Elle permet à Vertycal de réaliser des missions à forte valeur ajoutée (audits, mise en place du CSE...).",
              customerName: "François Bernhard",
              customerTitle: "Expert comptable",
            },
            {
              profileImageSrc:
                "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
              heading: "LINAMAR",
              quote:
                "Carole m'a accompagnée durant mon intégration. Elle est réactive, disponible et a été un réel soutien grâce à son recul et son expérience sur des points paie complexes.",
              customerName: "Morgane Saulnier",
              customerTitle: "Responsable paie",
            },
          ]}
          id="returns"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        <Footer />
      </motion.div>
    </>
  );
};

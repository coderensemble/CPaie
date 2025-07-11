import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/team-illustration.svg";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-4 md:mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-4/12 flex-shrink-0 relative w-full`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute md:right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-red-500`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

export default ({id,
  subheading = "Our Expertise",
  heading = (
    <>
      Expertise en  <span tw="text-secondary-200">Gestion de la Paie.</span>
    </>
  ),
  description = `Je suis là pour vous aider à simplifier et à optimiser vos processus de paie. Avec une attention méticuleuse aux détails et une connaissance approfondie des réglementations, je m'engage à vous offrir un service fiable et professionnel.

  Grâce à mon expérience dans l'utilisation des logiciels spécialisés et mon engagement envers l'excellence opérationnelle, je peux vous assurer une gestion efficace et transparente de toutes vos opérations de paie. Mon objectif principal est de répondre à vos besoins spécifiques et de vous offrir un service client de qualité.
  
  Explorez mes services dès maintenant pour découvrir comment je peux vous aider à simplifier vos processus de paie et à vous conformer aux normes en vigueur. Avec moi, vous pouvez compter sur un partenaire dévoué pour vous accompagner dans la gestion de la paie de votre entreprise.`,
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container id={id}>
      <TwoColumn>
        <ImageColumn>
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded}/>
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

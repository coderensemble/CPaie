import React, { useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import emailjs from '@emailjs/browser';
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as EmailIllustrationSrc} from "images/email-illustration.svg";


const Container = tw.div`relative min-h-screen pt-20`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 flex justify-center items-center`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);


const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-4 text-sm grid grid-cols-2 gap-x-8 max-w-lg mx-auto md:mx-0`
const Input = tw.input`mt-4 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-red-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  subheading = "CONTACT",
  heading = <>Expliquez moi<span tw="text-secondary-200"> Votre Situation</span><wbr/></>,
  description = "Vous avez un projet en tête ? Obtenez dès maintenant un devis personnalisé en quelques clics. Remplissez simplement mon formulaire en ligne en indiquant vos besoins spécifiques, et je vous fournis rapidement une estimation détaillée adaptée à votre projet.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dl9djrv', 'template_ovql93k', form.current, 'MD6rY0SPz1H_153O_')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        );
        alert('Merci, je vous contacte trés bientot!');
  };
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <EmailIllustrationSrc style={{ height: "30rem", color: 'rgba(239, 68, 68, 1)' }} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod} ref={form} onSubmit={sendEmail}>
              <Input type="text" name="name" placeholder="Nom de société"/>
              <Input type="email" name="user_email" placeholder="E-mail" required/>
              <Input type="text" name="telephone" placeholder="Téléphone" />
              <Input type="text" name="ccn" placeholder="CCN" />
              <Input type="text" name="nbr_salaries" placeholder="Nombre de salariés"/>
              <Input type="text" name="duree_mission" placeholder="Durée de la mission" />
              <Textarea name="message" placeholder="La mission demandé en quelques mots" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

import React, { useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import emailjs from '@emailjs/browser';
import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as DesignIllustration } from "../../images/design-illustration-2.svg";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";

const Container = tw.div`relative min-h-screen pt-20`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-4 md:mx-auto py-40`;
const LeftColumn = tw.div`relative md:w-6/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative md:w-6/12 flex flex-col justify-center`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-secondary-200 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-red-500 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-8`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

export default ({ roundedHeaderButton }) => {
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
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container id="home">
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Votre partenaire en gestion de paie! <span tw="text-primary-500"></span>
            </Heading>
            <Paragraph>
              Découvrez un partenaire en gestion de paie, offrant des solutions personnalisées pour répondre aux
              besoins uniques de chaque entreprise. Avec une approche sur mesure, mon service s'adapte parfaitement à
              votre structure et à vos exigences, assurant une gestion efficace et sans souci de la paie. Simplifiez vos
              processus et optimisez votre gestion grâce à notre partenariat dédié à votre réussite.
            </Paragraph>
            <Actions>
              <form ref={form} onSubmit={sendEmail}>
              <input type="email" name="user_email" placeholder="Votre adresse e-mail" />
              <button>C'est parti</button>
              </form>
            </Actions>
            <CustomersLogoStrip>
              <p>Ils m'ont fait confiance</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
              <IllustrationContainer>
              <DesignIllustration style={{ height: "30rem", color: 'rgba(239, 68, 68, 1)' }} />
            </IllustrationContainer>
            
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};

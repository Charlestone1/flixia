import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.textWhite};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.textWhite};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.textYellow};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;

  .flixspan {
    font-weight: bold;
    color: ${(props) => props.theme.textYellow};
  }
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faqs = () => {
  return (
    <Section id="faq">
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="Can I try FLIXIA free of charge?">
            Yes, you get a free trial period when you sign up to{" "}
            <span className="flixspan">FLIXIA</span> – and you can cancel your
            account at any time.
          </Accordion>
          <Accordion title="Can I import my playlists from other streaming services?">
            Yes, we want you to start from where you stopped, making your
            transition to <span className="flixspan">FLIXIA</span> to be as
            smooth as possible. You can import playlists here.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="What Payment methods are accepted?">
            <span className="flixspan">FLIXIA</span> accepts variety of payment
            channels. Using Cards, Visa card, Verve and Mastercard are allowed.
            Also the platform accepts payment through Webpay, Quickteller, Bank
            Deposit, paypal, Flutterwave.
          </Accordion>
          <Accordion title="Does HiFi work with mobile bandwidth?">
            HiFi streaming works really well on 4G/LTE networks. We have also
            had great results streaming over 3G, but if you’re moving quickly,
            like on a train or in a car, we recommend using offline mode to
            ensure uninterrupted playback.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faqs;

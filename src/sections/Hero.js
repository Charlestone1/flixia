import React from "react";
import styled from "styled-components";
// import { keyframes } from "styled-components";
import TypewriterEffect from "../components/TypewriterEffect";
import Loudmusic from "../assets/images/LoudMusic.png";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh  - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 85%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  & > *:last-child {
    background-image: url(${Loudmusic});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 50vh;
  }

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;

    & > *:first-child {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    & > *:last-child {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = () => {
  return (
    <Section id="hero">
      <Container>
        <Box>
          <TypewriterEffect />
        </Box>
        <Box></Box>
      </Container>
    </Section>
  );
};

export default Hero;

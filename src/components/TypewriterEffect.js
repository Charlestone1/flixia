import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.slate};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: ${(props) => props.theme.textYellow};
  }
  .text-2 {
    color: ${(props) => props.theme.text};
  }
  .text-3 {
    color: ${(props) => props.theme.myGreen};
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 95%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.slateRgba}, 0.8)`};
  font-weight: 600;
  margin: 1rem 0;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const TypewriterEffect = () => {
  return (
    <>
      <Title>
        For your music
        <Typewriter
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class='text-1'>Good Music</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class='text-2'>Better Sound</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class='text-3'>Best Playlists</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>A streaming service for all music fans.</SubTitle>
      <ButtonContainer>
        <Button text="Start Free Trial" link="#about" />
      </ButtonContainer>
    </>
  );
};

export default TypewriterEffect;

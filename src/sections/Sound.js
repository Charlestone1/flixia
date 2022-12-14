import React from "react";
import styled from "styled-components";
import SoundComp from "../components/SoundComp";
import SoundData from "../assets/data/SoundData";

const Container = styled.section`
  width: 100vw;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.body};
  overflow: auto;
`;

const SectionTitle = styled.div`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.textWhite};
  padding: 1rem;

  text-transform: uppercase;
  border-bottom: 2px solid ${(props) => props.theme.textYellow};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;

  @media (max-width: 64em) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 48em) {
    grid-template-columns: auto;
  }
`;

const Sound = () => {
  return (
    <Container id="sound">
      <SectionTitle>Sound</SectionTitle>
      <SectionContainer>
        <Box>
          {SoundData.map((sound) => {
            return <SoundComp key={sound.id} sound={sound} />;
          })}
        </Box>
      </SectionContainer>
    </Container>
  );
};

export default Sound;

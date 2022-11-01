import React from "react";
import styled from "styled-components";
import MusicData from "../assets/data/MusicData";
import MusicData1 from "../assets/data/MusicData1";
import MusicComp from "../components/MusicComp";
import MusicComp1 from "../components/MusicComp1";

const Container = styled.section`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.textYellow};
`;
const ContainerTitle = styled.h3`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.body};
  margin-bottom: 64px;

  text-transform: uppercase;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 95%;
  padding-bottom: 2rem;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* min-height: 40vh; */
`;
const TitleBox = styled.div`
  align-items: flex-start;
  padding: 0 2rem;
`;

const Genre = styled.h3`
  color: ${(props) => props.theme.textWhite};
  font-size: ${(props) => props.theme.fontxl};
  justify-content: flex-start;
`;

const Music = () => {
  return (
    <Container id="music">
      <ContainerTitle>Trending</ContainerTitle>
      <BoxContainer>
        <TitleBox>
          <Genre>Hip Hop</Genre>
        </TitleBox>
        <Box>
          {MusicData.map((music) => {
            return <MusicComp key={music.id} music={music} />;
          })}
        </Box>
      </BoxContainer>
      <BoxContainer>
        <TitleBox>
          <Genre>Afro Pop</Genre>
        </TitleBox>
        <Box>
          {MusicData1.map((music1) => {
            return <MusicComp1 key={music1.id} music1={music1} />;
          })}
        </Box>
      </BoxContainer>
    </Container>
  );
};

export default Music;

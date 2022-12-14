import React from "react";
import styled from "styled-components";

const MusicComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 11.25rem;
  height: 15.63rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.slate};
  border-radius: 6px;
  margin: 0.6rem;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 9.4rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 80%;
`;
const Artist = styled.h5`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.slate};
  padding: 1rem 0;

  @media (max-width: 50em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 0.7rem 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxs};
    padding: 0.5rem 0;
  }
`;
const SongTitle = styled.p`
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.slate};
  padding-bottom: 0.4rem;

  @media (max-width: 50em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const MusicComp1 = (props) => {
  const { artist, title, imgSrc } = props.music1;
  return (
    <MusicComponent>
      <ImageContainer>
        <Image src={imgSrc} alt={title} />
      </ImageContainer>
      <DetailsContainer>
        <Artist>{artist}</Artist>
        <SongTitle>{title}</SongTitle>
      </DetailsContainer>
    </MusicComponent>
  );
};

export default MusicComp1;

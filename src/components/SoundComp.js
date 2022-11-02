import React from "react";
import styled from "styled-components";

const SoundComponent = styled.div`
  display: flex;
  width: 15.63rem;
  /* height: 20.63rem; */
  border: 1px solid ${(props) => props.theme.textYellow};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textYellow};
  border-radius: 10px;
  margin: 1rem;
`;
const SoundContain = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textYellow};
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  align-self: flex-start;
  text-transform: capitalize;
  padding-top: 1rem;

  @media (max-width: 68em) {
    font-size: ${(props) => props.theme.fontlg};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textWhite};
  padding: 1.2rem 0;
`;
const Pil = styled.h4`
  text-align: justify;
  padding: 3px 10px;
  background-color: ${(props) => `rgba(${props.theme.slateRgba}, 0.75)`};
  font-size: ${(props) => props.theme.fontmd};
  border-radius: 4px;
  text-transform: capitalize;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2px 6px;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const Quality = styled.h6`
  font-size: ${(props) => props.theme.fontsm};
  text-align: center;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxs};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxxs};
  }
`;
const Size = styled.p`
  font-size: ${(props) => props.theme.fontxs};
  color: ${(props) => props.theme.slate};
  text-align: center;
`;
const Desc = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.textWhite};
  line-height: 1.2rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const SoundComp = (props) => {
  const { title, quality, size, desc } = props.sound;
  return (
    <SoundComponent>
      <SoundContain>
        <Title>{title}</Title>
        <FlexContainer>
          <Pil>{title}</Pil>
          <Quality>{quality}</Quality>
          <Size>{size}</Size>
        </FlexContainer>
        <Desc>{desc}</Desc>
      </SoundContain>
    </SoundComponent>
  );
};

export default SoundComp;

import React from "react";
import styled from "styled-components";

const SoundComponent = styled.div`
  display: flex;
  width: 28%;
  border: 1px solid ${(props) => props.theme.textYellow};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textYellow};
  border-radius: 10px;
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
`;
const Quality = styled.h6`
  font-size: ${(props) => props.theme.fontsm};
  text-align: center;
`;
const Size = styled.p`
  font-size: ${(props) => props.theme.fontxs};
  color: ${(props) => props.theme.slate};
  text-align: center;
`;
const Desc = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  text-align: justify;
  line-height: 1.2rem;
`;

const SoundComp = (props) => {
  const { id, title, quality, size, desc } = props.sound;
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

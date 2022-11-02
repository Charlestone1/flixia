import React from "react";
import styled from "styled-components";
import PlansData from "../assets/data/PlansData";
import PlansComp from "../components/PlansComp";

const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.textYellow};
  overflow: auto;
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
  justify-content: center;
  align-items: center;
  width: 95%;
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

const Plans = () => {
  return (
    <Container id="plans">
      <ContainerTitle>Pricing</ContainerTitle>
      <BoxContainer>
        <Box>
          {PlansData.map((plan) => {
            return <PlansComp key={plan.id} plan={plan} />;
          })}
        </Box>
      </BoxContainer>
    </Container>
  );
};

export default Plans;

import React from "react";
import styled from "styled-components";
import PlansData from "../assets/data/PlansData";
import PlansComp from "../components/PlansComp";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
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
  justify-content: center;
  align-items: center;
  width: 95%;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 80vh;
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

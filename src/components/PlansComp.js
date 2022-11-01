import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const PlanComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  /* border: 1px solid slateblue; */
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textYellow};
  border-radius: 10px;
`;
const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  align-self: flex-start;
  text-transform: uppercase;
  padding-top: 1rem;
  padding-left: 1rem;
`;
const Desc = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  align-self: flex-start;
  font-weight: bold;
  padding: 1rem;
`;
const AccessContainer = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  border-radius: 8px;
  margin: 1rem;
  background-color: #192a4f;
`;
const Access = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  padding: 0.3rem 0;

  .check {
    padding: 0 0.8rem;
  }
`;
const Pricing = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  text-align: center;
  padding-top: 2rem;
  font-weight: bold;
`;

const StartTrial = styled.a`
  display: inline-block;
  background-color: ${(props) => props.theme.textYellow};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.fontmd};
  padding: 0.9rem 4rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  margin: 1rem 0;
  align-self: center;

  &:hover {
    transform: scale(0.9);
  }
  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.textYellow};
    width: 100%;
    height: 100%;
    border-radius: 12px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const PlansComp = (props) => {
  const { id, title, desc, cost, access } = props.plan;
  return (
    <PlanComponent>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <AccessContainer>
        {access.map((ability, id) => {
          return (
            <Access key={id}>
              <FaCheck className="check" /> {ability}
            </Access>
          );
        })}
      </AccessContainer>
      <Pricing>30 Days Free Trial then ${cost} / Month</Pricing>
      <StartTrial href="#login">Start Free Trial</StartTrial>
    </PlanComponent>
  );
};

export default PlansComp;

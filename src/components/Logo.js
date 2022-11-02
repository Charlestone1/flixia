import React from "react";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import LogoImage from "../assets/images/flixialogo.png";

const LogoContainer = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 50px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 50px;
    border-radius: 10px;
  }
`;

const Logo = () => {
  return (
    <LogoContainer to="/">
      <img src={LogoImage} alt="flixia-logo" />
    </LogoContainer>
  );
};

export default Logo;

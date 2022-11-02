import React, { useState } from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import Logo from "../components/Logo";
import { Link as LinkRouter } from "react-router-dom";
// import { Link as LinkScroll } from "react-scroll";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  /* background-color: #13203c; */
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024px */
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.body}, 0.85)`};
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }
`;

// const LogoContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 140px;
//   height: 50px;

//   img {
//     width: 100%;
//     height: 50px;
//     border-radius: 10px;
//   }
// `;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.textWhite};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.textWhite};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  right: 5%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024px */
    display: flex;
  }
  @media (max-width: 48em) {
    right: 1rem;
  }

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const LogIn = styled(LinkRouter)`
  display: inline-block;
  background-color: ${(props) => props.theme.textYellow};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.fontmd};
  padding: 0.9rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  margin-right: 1.5rem;

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

const Navbar = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };
  return (
    <Section id="navbar">
      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("music")}>Music</MenuItem>
          <MenuItem onClick={() => scrollTo("sound")}>Sound</MenuItem>
          <MenuItem onClick={() => scrollTo("plans")}>Pricing</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>Faqs</MenuItem>
          <MenuItem>
            <div className="mobile">
              <LogIn to="/login">
                <FaUserAlt /> LogIn
              </LogIn>
              <LogIn to="/signup">
                <FaUserAlt /> SignIn
              </LogIn>
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <LogIn to="/login">
            <FaUserAlt /> LogIn
          </LogIn>
          <LogIn to="/signup">
            <FaUserAlt /> Sign Up
          </LogIn>
        </div>
      </NavBar>
    </Section>
  );
};

export default Navbar;

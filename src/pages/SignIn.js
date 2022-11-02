import React, { useRef, useState } from "react";
import styled from "styled-components";
import FormInput from "../components/Form/FormInput";
import Logo from "../components/Logo";

const AllContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.body};
  padding-top: 1rem;
  padding-left: 1rem;
`;

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", cursive;
  font-weight: 900;
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: ${(props) => props.theme.fontxxl};
  white-space: nowrap;
  color: ${(props) => props.theme.textYellow};

  &::after {
    content: "";
    display: block;
    position: relative;
    top: 0;
    width: 250px;
    height: 1px;
    margin-left: 20px;
    background-color: ${(props) => props.theme.slate};

    @media (max-width: 64em) {
      width: 60%;
    }
    @media (max-width: 48em) {
      width: 50%;
    }
  }
`;

const FormContainer = styled.div`
  width: 70vw;
  min-height: 60vh;
  margin: 0 auto;
  /* margin-top: 4rem; */

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  form {
    background-color: ${(props) => props.theme.formGrey};
    width: 70%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    color: ${(props) => props.theme.textWhite};
  }
`;

const SubmitContainer = styled.div`
  width: 85%;
  height: 3.2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-end;

  /* border: 1px solid green; */
`;
const SubmitBtn = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.textYellow};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.fontmd};
  padding: 0.9rem 2rem;
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

const SignIn = () => {
  const formRef = useRef();
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });

  const inputs = [
    {
      id: 10,
      name: "user_name",
      type: "text",
      placeholder: "Username",
      errorMessage: "Please Enter Your Name",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,26}$",
      required: true,
    },
    {
      id: 11,
      name: "user_email",
      type: "email",
      placeholder: "Enter Email",
      errorMessage: "Please enter a valid Email",
      label: "Email",
      required: true,
    },
    {
      id: 12,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      errorMessage: "Please enter a Valid password",
      label: "Password",
      pattern: "^[A-Za-z0-9]{3,20}$",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AllContainer>
        <Logo />
        <Container>
          <Section>
            <SectionTitleContainer>
              <SectionTitle>Sign Up</SectionTitle>
            </SectionTitleContainer>
            <FormContainer>
              <form ref={formRef}>
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <SubmitContainer>
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                </SubmitContainer>
              </form>
            </FormContainer>
          </Section>
        </Container>
      </AllContainer>
    </>
  );
};

export default SignIn;

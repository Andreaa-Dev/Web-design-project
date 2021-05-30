import React from "react";
import styled from "styled-components";
import NavBarLeica from "../NavBar/NavBarLeica";

import CameraImg from "../Img&Video/camera-background.png";

const BackgroundStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(#525252, #131313);
`;

const Title = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 3rem;
  color: white;
  margin: 5rem auto 0 5rem;
`;
const Img = styled.img`
  height: 16rem;
  width: 20rem;
  margin: auto;
  margin-top: 1rem;
  transform: rotate(-10deg);
`;

const TextBox = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  height: 100vh;
  width: 100wv;
  margin-left: 57rem;
  margin-right: 3rem;
  margin-top: -3rem;
`;
const Text = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

function Leica() {
  return (
    <BackgroundStyle>
      <NavBarLeica />
      <Title>Leica CL</Title>
      <Img src={CameraImg} alt="error" />
      <TextBox>
        <Text>Dream Big. Pack Small</Text>
        <p>
          The Leica CL represents the juxtaposition of iconic design and
          advanced technical standards.
        </p>
      </TextBox>
    </BackgroundStyle>
  );
}

export default Leica;

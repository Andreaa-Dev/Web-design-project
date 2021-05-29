import React from "react";
import styled from "styled-components";

const BackgroundStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background: radial-gradient(#525252, #131313);
`;
const Title = styled.h1`
  font-family: "Lobster", cursive;
`;

const Text = styled.p`
  font-family: "Lobster", cursive;
`;
function Camera() {
  return (
    <BackgroundStyle>
      <Title>hi</Title>
      <Text>HIHI</Text>
    </BackgroundStyle>
  );
}

export default Camera;

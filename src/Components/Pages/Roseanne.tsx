import React from "react";
import styled from "styled-components";
import watch1 from "../Img&Video/Watch/watch1.png";
import watch2 from "../Img&Video/Watch/watch2.png";
import watch3 from "../Img&Video/Watch/watch3.png";
import watch4 from "../Img&Video/Watch/watch4.png";
import watch5 from "../Img&Video/Watch/watch5.png";

const Card = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`;
const Title = styled.h1`
  font-family: "Limelight", cursive;
  color: white;
  font-size: 2rem;
  margin: 2rem auto 3rem 1rem;
`;
const ImgCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Img = styled.img`
  height: 20rem;
  width: 10rem;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.2) translate(-10%, -10%);
  }
`;
const Button = styled.button`
  border: solid black;
  border-radius: 2rem;
`;
function Roseanne() {
  return (
    <Card>
      <Title>ROSEANNE WATCHES </Title>
      <ImgCard>
        <Img src={watch1} alt="" />
        <Img src={watch2} alt="" />
        <Img src={watch3} alt="" />
        <Img src={watch4} alt="" />
        <Img src={watch5} alt="" />
      </ImgCard>
      <Button>More information</Button>
    </Card>
  );
}

export default Roseanne;

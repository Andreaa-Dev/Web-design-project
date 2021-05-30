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
const Title = styled.div`
  font-family: "Limelight", cursive;
  color: white;
  font-size: 2rem;
  margin-top: 5rem;
  /* margin: 2rem auto 3rem 1rem; */
`;
const ImgCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Img = styled.img`
  height: 30rem;
  width: 15rem;
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
      <button>More information</button>
    </Card>
  );
}

export default Roseanne;

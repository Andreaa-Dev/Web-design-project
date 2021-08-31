import React from "react";
import styled from "styled-components";
import watch1 from "../Img&Video/Watch/watch1.png";
import watch2 from "../Img&Video/Watch/watch2.png";
import watch3 from "../Img&Video/Watch/watch3.png";
import watch4 from "../Img&Video/Watch/watch4.png";
import watch5 from "../Img&Video/Watch/watch5.png";

const Card = styled.div`
  background-color: #1a1919;
  background-size: cover;
  width: 100%;
  margin: 0;
  padding: 0;
`;
const Title = styled.h1`
  font-family: "Limelight", cursive;
  color: white;
  font-size: 3rem;
  margin: 0;
  padding-top: 2rem;
  padding-left: 2rem;
`;
const ItemCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
const Item = styled.div`
  transition: 0.5s;
  cursor: pointer;
  opacity: 0.5;
  :hover {
    transform: scale(1.2) translate(-10%, -10%);
    opacity: 1;
  }
`;
const Img = styled.img`
  height: 18rem;
  width: 10rem;
  margin-top: 4rem;
`;

const Text = styled.p`
  color: white;
  text-align: center;
`;
const Button = styled.button`
  border: solid black;
  border-radius: 7px;
  height: 2.2rem;
  width: 8rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  margin-left: 50%;
`;
function Roseanne() {
  return (
    <Card>
      <Title>ROSEANNE </Title>
      <ItemCard>
        <Item>
          <Img src={watch1} alt="error" />
          <Text>Men in Black</Text>
        </Item>

        <Item>
          <Img src={watch2} alt="error" />
          <Text>Classic Fusion</Text>
        </Item>
        <Item>
          <Img src={watch3} alt="error" />
          <Text>New !!!</Text>
        </Item>
        <Item>
          <Img src={watch4} alt="error" />
          <Text>Big Bang</Text>
        </Item>
        <Item>
          <Img src={watch5} alt="error" />
          <Text> Pretty Savage</Text>
        </Item>
      </ItemCard>
      <Button>HOME PAGE</Button>
    </Card>
  );
}

export default Roseanne;

import React from "react";
import styled from "styled-components";

const Card = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SmallCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40rem;
  align-items: center;
`;
const Title = styled.div`
  font-family: "ZCOOL KuaiLe", cursive;
  font-size: 4rem;
  font-weight: bold;
  margin: 1.5rem auto auto 1.5rem;
`;
const Text = styled.div`
  text-transform: uppercase;
`;
const HomeText = styled.div`
  border: 1px solid white;
  border-radius: 1px;
  height: 2rem;
  width: 6rem;
  text-transform: uppercase;
  text-align: center;
  padding-top: 0.5rem;
`;

function NavBarTrio() {
  return (
    <Card>
      <Title>II Trio</Title>
      <SmallCard>
        <HomeText>Home</HomeText>
        <Text>Menu</Text>
        <Text>Reservation</Text>
        <Text>Contact</Text>
      </SmallCard>
    </Card>
  );
}

export default NavBarTrio;

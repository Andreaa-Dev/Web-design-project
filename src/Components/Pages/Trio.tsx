import React from "react";
import styled from "styled-components";
import TrioMain from "../Img&Video/IL-Trio Restaurant/Trio_main.jpeg";

import NavBarTrio from "../NavBar/NavBarTrio";

const MainCard = styled.div`
  background: url(${TrioMain});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  color: white;
`;
const Text = styled.div`
  text-transform: uppercase;
  font-size: 4rem;
  margin: 9rem auto 1rem 5rem;
`;
const Button = styled.button`
  border: 1px solid white;
  border-radius: 1px;
  height: 3rem;
  width: 9rem;
  text-transform: uppercase;
  margin-left: 5rem;
`;

function Trio() {
  return (
    <MainCard>
      <NavBarTrio />
      <Text>Table for two</Text>
      <Button>Reserve table</Button>
    </MainCard>
  );
}

export default Trio;

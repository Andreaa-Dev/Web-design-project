import React from "react";
import Bird from "../Img&Video/bird.png";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  background-color: #2b2929;
  color: white;
`;

const Logo = styled.img`
  height: 3rem;
  width: 3rem;
  margin: 1rem auto 1rem 1rem;
`;
const SmallNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 35rem;
`;

function NavBarStyle1() {
  return (
    <Card>
      <Logo src={Bird} alt="error" />
      <SmallNav>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>FAVORITE</p>
      </SmallNav>
    </Card>
  );
}

export default NavBarStyle1;

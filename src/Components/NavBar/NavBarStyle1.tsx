import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000000;
  background: linear-gradient(to top, black, #353434);
  color: white;
`;

const SmallNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 35rem;
`;
const Logo = styled.h1`
  font-family: "ZCOOL KuaiLe", cursive;
`;

const Button = styled.button`
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 0.4rem;
`;

function NavBarStyle1() {
  return (
    <Card>
      <Logo>ANDREA</Logo>
      <SmallNav>
        <Button>HOME</Button>
        <Button>ABOUT US</Button>
        <Button>FAVORITE</Button>
        <Link to="/home/login">
          <Button>LOG IN</Button>
        </Link>
      </SmallNav>
    </Card>
  );
}

export default NavBarStyle1;

import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Icon from "../Img&Video/starbuck-icon.png";

const Img = styled.img`
  height: 5rem;
  width: 5rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Button = styled.button`
  background-color: #1fa449;
  border: solid #1fa449;
  border-radius: 2rem;
  height: 2rem;
  width: 5rem;
  color: white;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
function NavbarStarbuck() {
  return (
    <Card>
      <Img src={Icon} alt="error" />
      <Button>
        <CustomLink to="/">HOME</CustomLink>
      </Button>
      <p>Menu</p>
      <p>What's New</p>
      <p>Contact</p>
    </Card>
  );
}

export default NavbarStarbuck;

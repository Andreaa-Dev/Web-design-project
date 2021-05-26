import React from "react";
import styled from "styled-components";
import Icon from "../Img&Video/starbuck-icon.png";

const Img = styled.img`
  height: 5rem;
  width: 5rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  background-color: #017143;
`;
function NavbarStarbuck() {
  return (
    <Card>
      <Img src={Icon} alt="error" />
      <Button>Home</Button>
      <p>Menu</p>
      <p>What's New</p>
      <p>Contact</p>
    </Card>
  );
}

export default NavbarStarbuck;

import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  font-family: "Lobster", cursive;
  color: white;
  background-color: #d31313;
  height: 3rem;
  width: 3rem;
  padding-top: 1.3rem;
  padding-left: 1rem;
  clip-path: circle(40%);
  margin-top: 1rem;
  margin-left: 1rem;
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: #d31313;
  color: white;
  border: 2px solid #d31313;
  border-radius: 3px;
  height: 2rem;
  width: 4rem;
`;

const NavBarItem = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20rem;
  color: white;
  margin-right: 3rem;
  align-items: center;
`;
function NavBarLeica() {
  return (
    <div>
      <NavBar>
        <Logo>Leica</Logo>
        <NavBarItem>
          <p>HOME</p>
          <p>News</p>
          <Button>Order</Button>
        </NavBarItem>
      </NavBar>
    </div>
  );
}

export default NavBarLeica;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Img&Video/feather.png";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

const SmallNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 35rem;
`;
const Logo = styled.img`
  height: 5rem;
  width: 5rem;
  margin: 2rem;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

function NavBarStyle1() {
  return (
    <Card>
      <Logo src={logo} alt="error" />
      <SmallNav>
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="/home/product">PRODUCTS</CustomLink>
        <CustomLink to="/home/favorite">FAVORITE</CustomLink>
        <CustomLink to="/home/login">LOG IN </CustomLink>
        <CustomLink to="/home/account">ACCOUNT</CustomLink>
      </SmallNav>
    </Card>
  );
}

export default NavBarStyle1;

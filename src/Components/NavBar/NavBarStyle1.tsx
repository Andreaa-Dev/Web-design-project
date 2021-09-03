import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
        <Link to="/">
          <Button>
            <HomeIcon />
          </Button>
        </Link>
        <Button>
          <InfoIcon />
        </Button>
        <Link to="/home/favorite">
          <Button>
            <FavoriteIcon />
          </Button>
        </Link>
        <Link to="/home/login">
          <Button>
            <LockOpenIcon />
          </Button>
        </Link>
        <Link to="/home/account">
          <Button>
            <AccountCircleIcon />
          </Button>
        </Link>
      </SmallNav>
    </Card>
  );
}

export default NavBarStyle1;

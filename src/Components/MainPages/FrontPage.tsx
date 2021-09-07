import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBarStyle1";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import frontPageImg from "../Img&Video/FrontPage/frontPageImg.jpeg";
import mainPage from "../Img&Video/FrontPage/backGround1.jpeg";

const BackGroundImg = styled.div`
  background: url(${mainPage});
  /* background-size: contain; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-left: 15rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Text = styled.p`
  color: white;
  margin-left: 15rem;
  font-size: 1rem;
`;

const Button = styled.button`
  height: 2.5rem;
  width: 7rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  color: black;
  background-color: white;
  margin-top: 1rem;
  margin-bottom: 7rem;
  margin-left: 15rem;
`;

function FrontPage() {
  return (
    <BackGroundImg>
      <NavBar />
      <Title>MAKE IT</Title>
      <Text>Everything you need to grow your business online.</Text>
      <Text>Start your free website trial today. No credit card required.</Text>
      <Link to="/product">
        <Button>GET STARTED</Button>
      </Link>
      <Footer />
    </BackGroundImg>
  );
}

export default FrontPage;

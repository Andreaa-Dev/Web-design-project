import React from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-left: 55rem;
  margin-bottom: 3rem;
  margin-top: 5rem;
  @media (max-width: 900px) {
    margin-left: 20rem;
  }
`;

const Text = styled.p`
  color: white;
  margin-left: 55rem;
  font-size: 1rem;
  @media (max-width: 768px) {
    margin-left: 20rem;
  }
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
  margin-left: 55rem;
  @media (max-width: 768px) {
    margin-left: 20rem;
  }
`;

function FrontPage() {
  return (
    <div>
      <Title>MAKE IT</Title>
      <Text>Everything you need to grow your business online.</Text>
      <Text>Start your free website trial today. No credit card required.</Text>
      <Link to="/home/product">
        <Button>GET STARTED</Button>
      </Link>
      <Footer />
    </div>
  );
}

export default FrontPage;

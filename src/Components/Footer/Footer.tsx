import React from "react";
import styled from "styled-components";
import facebook from "../Img&Video/Footer/facebook.png";
import instagram from "../Img&Video/Footer/instagram.png";
import twitter from "../Img&Video/Footer/twitter.png";
import copyright from "../Img&Video/Footer/copyright.png";

const FooterCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  margin-top: 8.5rem;
`;

const Img = styled.img`
  height: 2rem;
  width: 2rem;
  margin: 1rem;
`;

function Footer() {
  return (
    <FooterCard>
      <Img src={facebook} alt="error" />
      <Img src={instagram} alt="error" />
      <Img src={twitter} alt="error" />
      <Img src={copyright} alt="error" />
    </FooterCard>
  );
}

export default Footer;

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import background from "../Img&Video/Gooddy.jpeg";
import gsap from "gsap";

const Logo = styled.p`
  font-family: Lobster, cursive;
`;
const MainPage = styled.div`
  font-size: 2rem;
  background: url(${background});
  min-height: 100vh;
  background-size: cover;
  padding: 0rem 5rem;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Intro = styled.div`
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const IntroText = styled.p`
  color: #b6b1b1;
  font-size: 2rem;
  font-weight: bold;
  transform: translateY(100%);
  display: inline-block;
`;

const Hide = styled.div`
  background: black;
  overflow: hidden;
`;

const Slider = styled.div`
  background: #716f6f;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
`;

function Gooddy() {
  let main = useRef<any>(null);
  let intro = useRef<any>(null);
  let slider = useRef<any>(null);

  useEffect(() => {
    gsap.to(intro.current, {
      y: 20,
      defaults: {
        duration: 2,
        ease: "power1.out",
      },
    });
  }, []);

  return (
    <div>
      <MainPage ref={main}>
        <Nav>
          <Logo>Gooddy</Logo>
          <ul>
            <li>Home</li>
            <li>Contract</li>
            <li>About</li>
          </ul>
        </Nav>
        <h2>Good as always </h2>
      </MainPage>
      <Intro>
        <Hide>
          <IntroText ref={intro}>Creating innovation</IntroText>
        </Hide>
        <Hide>
          <IntroText ref={intro}>For everyday</IntroText>
        </Hide>
        <Hide>
          <IntroText ref={intro}>People</IntroText>
        </Hide>
      </Intro>
      <Slider ref={slider}></Slider>
    </div>
  );
}

export default Gooddy;

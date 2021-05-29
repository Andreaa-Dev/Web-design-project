import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavbarStarbuck";
import CheeseCake from "../Img&Video/cheesecake.png";
import Matcha from "../Img&Video/matcha.png";
import Caramel from "../Img&Video/caramel.png";
import FaceBook from "../Img&Video/facebook.png";
import Instagram from "../Img&Video/instagram.png";
import Twitter from "../Img&Video/twitter.png";

const Style = styled.div`
  display: flex;
  flex-direction: table;
  margin-top: 2rem;
`;

const Text = styled.div`
  font-family: "Poppins", sans-serif;
  width: 50vw;
  margin-left: 3rem;
  color: black;
  width: 35rem;
  margin-top: 5rem;
`;
const Title = styled.p`
  font-size: 3rem;
  font-weight: bolder;

  margin-bottom: 1rem;
  margin-top: 0rem;
`;
const Text1 = styled.span`
  font-size: 5rem;
  color: #1fa449;
  font-weight: 800;
`;

const Button = styled.button`
  background-color: #1fa449;
  border: solid #1fa449;
  border-radius: 2rem;
  height: 2rem;
  width: 7rem;
  color: white;
  margin-left: 3rem;
`;

const ClipPath = styled.div`
  background: ${(props) => (props.color ? props.color : "#1fa449")};
  height: 45rem;
  width: 40rem;
  position: absolute;
  margin-left: 50rem;
  clip-path: circle(570px at right 700px);
  z-index: -10;
`;
const MainImg = styled.img`
  margin: 4rem 2rem 1rem 7rem;
  transform: rotate(-7deg);
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 35rem;
  margin-top: 0rem;
  align-items: center;
  transform: translateX(-10%);
`;
const MatChaImg = styled.img`
  width: 6rem;
  height: 9rem;
  margin-left: 1rem;
  margin-right: 1rem;
  transform: rotate(8deg);

  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: translateX(1px);
  }
`;

const CheeseCakeImg = styled.img`
  transform: rotate(-20deg);
  width: 4.7rem;
  height: 9rem;

  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: translateY(-13px);
  }
`;

const CaramelImg = styled.img`
  transform: rotate(20deg);
  width: 5rem;
  height: 9rem;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: translateY(-15px);
  }
`;
const Icon = styled.img`
  height: 2rem;
  width: 2rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: translateY(-5px);
  }
`;
const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: 80rem;
  margin-top: 10rem;
`;

function StarBuck() {
  const [color, setColor] = useState("");
  const [img, setImg] = useState(Matcha);

  const changeColorHandler = (name: string) => {
    if (name === "CheeseCake") {
      console.log("CheeseCake", CheeseCake);
      setColor("#e15f5f");
      setImg(CheeseCake);
    }
    if (name === "Matcha") {
      setColor("#1fa449");
      setImg(Matcha);
    }
    if (name === "Caramel") {
      setColor("#e1721d");
      setImg(Caramel);
    }
    if (name === "cancel") {
      setColor("#1fa449");
      setImg(Matcha);
    }
  };

  return (
    <div>
      <ClipPath color={color} />
      <NavBar />
      <div>
        <Style>
          <div>
            <Text>
              <Title>It's not just Coffee</Title>
              <Title>
                It's
                <Text1> StarBucks </Text1>
              </Title>
              <p>
                THE BEST COFFEE. STARBUCKS COFFEE FINDER. Our coffee masters
                have distilled their years of tasting knowledge down to three
                simple questions to help you find a Starbucks coffee you’re sure
                to love.
              </p>
            </Text>
            <Button> LEARN MORE</Button>
            <ImgBox>
              <CheeseCakeImg
                onMouseEnter={() => changeColorHandler("CheeseCake")}
                onMouseLeave={() => changeColorHandler("cancel")}
                src={CheeseCake}
                alt="error"
              />
              <MatChaImg
                onMouseEnter={() => changeColorHandler("Matcha")}
                onMouseLeave={() => changeColorHandler("cancel")}
                src={Matcha}
                alt="error"
              />
              <CaramelImg
                onMouseEnter={() => changeColorHandler("Caramel")}
                onMouseLeave={() => changeColorHandler("cancel")}
                src={Caramel}
                alt="error"
              />
            </ImgBox>
          </div>

          <div>
            <MainImg src={img} alt="error" height="500rem" width="300rem" />
          </div>

          <IconCard>
            <Icon src={FaceBook} alt="error" />
            <Icon src={Instagram} alt="error" />
            <Icon src={Twitter} alt="error" />
          </IconCard>
        </Style>
      </div>
    </div>
  );
}

export default StarBuck;

import React from "react";
import "./App.css";
import styled from "styled-components";
import mainPage from "./Components/Img&Video/mainPage.jpeg";

import data from "./data";

import { Switch, Route } from "react-router-dom";
import NavBar1 from "./Components/NavBar/NavBarStyle1";
import Items from "./Components/Items/Items";
import Pages from "./Components/Pages/Pages";
import Login from "./Components/MainPages/Login";
import UserAccount from "./Components/MainPages/UserAccount";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  margin: 6rem;
`;
const Title = styled.h1`
  text-align: center;
  margin: 4rem auto 4rem auto;
`;

const Img = styled.img`
  width: 100vw;
  height: 50vh;
`;

function App() {
  return (
    <div className="App">
      <NavBar1 />
      <Switch>
        <Route exact path="/">
          <div>
            <Img src={mainPage} alt="error" />
            <Title>Choose your style</Title>
            <Card>
              {data.map((item) => {
                return <Items item={item} />;
              })}
            </Card>
          </div>
        </Route>
        <Route exact path="/pages/:id">
          <Pages />
        </Route>
        <Route exact path="/home/login">
          <Login />
        </Route>
        <Route exact path="/home/account">
          <UserAccount />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

import { Switch, Route } from "react-router-dom";
import NavBar1 from "./Components/NavBar/NavBarStyle1";
import Page1 from "./Components/Pages/Page1";

import StarBuck from "./Components/Img&Video/StarBucks.png";

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 20rem;
  width: 35rem;
`;

const Button = styled.button`
  height: 3rem;
  width: 7rem;
  border-radius: 1.5rem;
`;

function App() {
  return (
    <div className="App">
      <NavBar1 />
      <h1>Choose your style</h1>
      <Item>
        <Img src={StarBuck} alt="error" />
        <Button>More detail</Button>
      </Item>
      <Switch>
        <Route exact path="./page1">
          <Page1 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

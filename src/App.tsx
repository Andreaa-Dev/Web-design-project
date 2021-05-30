import React from "react";
import "./App.css";
import styled from "styled-components";

import data from "./data";

import { Switch, Route } from "react-router-dom";
import NavBar1 from "./Components/NavBar/NavBarStyle1";
import Items from "./Components/Items/Items";
import Pages from "./Components/Pages/Pages";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  margin-left: 6rem;
`;
const Title = styled.h1`
  text-align: center;
  margin: 4rem auto 4rem auto;
`;
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div>
            <NavBar1 />
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
      </Switch>
    </div>
  );
}

export default App;

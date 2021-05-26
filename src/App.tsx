import React from "react";
import "./App.css";
import styled from "styled-components";

import data from "./data";

import { Switch, Route } from "react-router-dom";
import NavBar1 from "./Components/NavBar/NavBarStyle1";
import Items from "./Components/Items/Items";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
`;

function App() {
  return (
    // type Item = {
    //   item:string
    // }
    <div className="App">
      <NavBar1 />
      <h1>Choose your style</h1>
      <Card>
        {data.map((item) => {
          return <Items item={item} />;
        })}
      </Card>

      <Switch>
        <Route exact path="./id"></Route>
      </Switch>
    </div>
  );
}

export default App;

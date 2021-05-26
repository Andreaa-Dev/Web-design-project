import React, { useState } from "react";
import "./App.css";
import NavBar1 from "./Components/NavBar/NavBarStyle1";
import Page1 from "./Components/Pages/Page1";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar1 />
      <Switch>
        <Route exact path="./page1">
          <Page1 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

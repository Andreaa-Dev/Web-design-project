import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBarStyle1";
import FrontPage from "./Components/MainPages/FrontPage";
import Product from "./Components/MainPages/Product";
import Pages from "./Components/Pages/Pages";
import Login from "./Components/MainPages/Login";
import UserAccount from "./Components/MainPages/UserAccount";
import UserFav from "./Components/MainPages/UserFav";
import Register from "./Components/MainPages/Register";

import data from "./data";

import background from "./Components/Img&Video/FrontPage/bg.jpeg";
import styled from "styled-components";

const BackGroundImg = styled.div`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  min-height: 100vh;
`;
function App() {
  return (
    <BackGroundImg>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route exact path="/home/product">
          <Product data={data} />
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
        <Route exact path="/home/favorite">
          <UserFav />
        </Route>
        <Route exact path="/home/register">
          <Register />
        </Route>
      </Switch>
    </BackGroundImg>
  );
}

export default App;

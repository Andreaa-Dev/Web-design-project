import React from "react";
import { Switch, Route } from "react-router-dom";

import FrontPage from "./Components/MainPages/FrontPage";
import Product from "./Components/MainPages/Product";
import Pages from "./Components/Pages/Pages";
import Login from "./Components/MainPages/Login";
import UserAccount from "./Components/MainPages/UserAccount";
import UserFav from "./Components/MainPages/UserFav";
import Register from "./Components/MainPages/Register";

import data from "./data";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route exact path="/product">
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
    </div>
  );
}

export default App;

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Portfolio from "../Portfolio";
import Skills from "../Skills";
import Navbar from "./Navbar";

const index = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/skills" component={Skills} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;

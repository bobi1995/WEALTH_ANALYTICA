import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "../components/navbar.components/Home";
import About from "../components/navbar.components/About";
import Login from "../components/Login";
import Dashboard from "../components/data.components/Dashboard";
import Contact from "../components/navbar.components/Contact";
import AboutUs from "../components/navbar.components/About";
import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "../history/history";
import PrivateRoute from "../Routes/PrivateRoute";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/about" component={About} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;

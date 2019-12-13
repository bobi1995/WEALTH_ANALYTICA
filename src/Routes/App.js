import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "../components/navbar.components/Home";
import About from "../components/navbar.components/About";
import Login from "../components/Login";
import Contact from "../components/navbar.components/Contact";
import AboutUs from "../components/navbar.components/About";
import Dashboard from "../components/data.components/Dashboard";
import Filters from "../components/data.components/Filters";
import Profile from "../components/data.components/Profile";
import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "../history/history";
import PrivateRoute from "../Routes/PrivateRoute";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={AboutUs} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/filters" component={Filters} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;

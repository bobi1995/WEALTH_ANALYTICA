import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Dashboard from "./components/data.components/Dashboard";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "./history/history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

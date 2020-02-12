import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "../components/navbar.components/Home";
import Login from "../components/Login";
import Dashboard from "../components/data.components/Dashboard";
import Heatmap from "../components/data.components/Heatmap";
import Bookmarks from "../components/data.components/Bookmarks";
import OnePager from "../components/data.components/OnePager";
import PlanProfile from "../components/data.components/PlanProfile";
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
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/filters" component={Filters} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/heatmap" component={Heatmap} />
        <PrivateRoute path="/bookmarks" component={Bookmarks} />
        <PrivateRoute path="/onepager/:planID/:isLarge" component={OnePager} />
        <PrivateRoute
          path="/planprofile/:planID/:isLarge"
          component={PlanProfile}
        />
      </Switch>
    </Router>
  );
}

export default App;

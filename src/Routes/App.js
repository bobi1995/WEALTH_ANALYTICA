import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Page404 from "../components/Page404";
import Login from "../components/Login";
import DashboardUltimate from "../components/data.components/DashboardUltimate";
import Bookmarks from "../components/data.components/Bookmarks";
import OnePager from "../components/data.components/OnePager";
import PlanProfile from "../components/data.components/PlanProfile";
import Filter2 from "../components/data.components/Filters2";
import Profile from "../components/data.components/Profile";
import SavedFilters from "../components/data.components/SavedFilters";
import AccountPage from "../components/data.components/DashboardUltimate/Pages/AccountPage";
import StatisticsPage from "../components/data.components/DashboardUltimate/Pages/StatisticsPage";
import PurchasePage from "../components/data.components/DashboardUltimate/Pages/PurchasePage";
import UserManagement from "../components/data.components/DashboardUltimate/Pages/UserManagement";

import Demo from "../components/Demo";
import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "../history/history";
import PrivateRoute from "../Routes/PrivateRoute";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/demo" component={Demo} />
        <PrivateRoute path="/dashboard" component={DashboardUltimate} />
        <PrivateRoute path="/account" component={AccountPage} />
        <PrivateRoute path="/statistics" component={StatisticsPage} />
        <PrivateRoute path="/purchase" component={PurchasePage} />
        <PrivateRoute path="/management" component={UserManagement} />

        <PrivateRoute path="/filters" component={Filter2} />

        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/bookmarks" component={Bookmarks} />
        <PrivateRoute path="/saved-filters" component={SavedFilters} />

        <PrivateRoute path="/onepager/:CompanyID" component={OnePager} />
        <PrivateRoute path="/planprofile/:CompanyID" component={PlanProfile} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;

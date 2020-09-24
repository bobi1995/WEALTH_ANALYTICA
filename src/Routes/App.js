import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Page404 from "../screens/Page404";
import Login from "../screens/Login";
import DashboardUltimate from "../screens/data.screens/DashboardUltimate";
import Bookmarks from "../screens/data.screens/Bookmarks";
import OnePager from "../screens/data.screens/OnePager";
import PlanProfile from "../screens/data.screens/PlanProfile";
import Filter2 from "../screens/data.screens/Filters2";
import SavedFilters from "../screens/data.screens/SavedFilters";
import AccountPage from "../screens/data.screens/DashboardUltimate/Pages/AccountPage";
import StatisticsPage from "../screens/data.screens/DashboardUltimate/Pages/StatisticsPage";
import PurchasePage from "../screens/data.screens/DashboardUltimate/Pages/PurchasePage";
import UserManagement from "../screens/data.screens/DashboardUltimate/Pages/UserManagement";

import Demo from "../screens/Demo";
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

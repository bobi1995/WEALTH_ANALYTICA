import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Page404 from "../screens/Page404";
import Login from "../screens/Login";
import DashboardUltimate from "../screens/data.screens/DashboardUltimate";
import Bookmarks from "../screens/data.screens/Bookmarks";
import OnePager from "../screens/data.screens/OnePager";
import PlanProfile2 from "../screens/data.screens/PlanProfile2";
import Filter2 from "../screens/data.screens/Filters2";
import SavedFilters from "../screens/data.screens/SavedFilters";
import AccountPage from "../screens/data.screens/DashboardUltimate/Pages/AccountPage";
import StatisticsPage from "../screens/data.screens/DashboardUltimate/Pages/StatisticsPage";
import PurchasePage from "../screens/data.screens/DashboardUltimate/Pages/PurchasePage";
import UserManagement from "../screens/data.screens/DashboardUltimate/Pages/UserManagement";
import Connections from "../screens/data.screens/DashboardUltimate/Pages/Connections";
import Heatmap from "../screens/data.screens/Heatmap";
import Diagnostic from "../screens/data.screens/Diagnostic";
import Graphs from "../screens/data.screens/Graphs";
import PublicGraphs from "../screens/PublicGraphs";
import Benchmark from "../screens/data.screens/Benchmark";
import EmailingSystem from "../screens/data.screens/EmailingSystem";
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
        <Route path="/graph" component={PublicGraphs} />
        <PrivateRoute path="/dashboard" component={DashboardUltimate} />
        <PrivateRoute path="/account" component={AccountPage} />
        <PrivateRoute path="/statistics" component={StatisticsPage} />
        <PrivateRoute path="/purchase" component={PurchasePage} />
        <PrivateRoute path="/management" component={UserManagement} />
        <PrivateRoute path="/connections" component={Connections} />
        <PrivateRoute path="/filters" component={Filter2} />
        <PrivateRoute path="/bookmarks" component={Bookmarks} />
        <PrivateRoute path="/saved-filters" component={SavedFilters} />
        <PrivateRoute path="/onepager/:CompanyID" component={OnePager} />
        <PrivateRoute path="/planprofile/:CompanyID" component={PlanProfile2} />
        <PrivateRoute path="/heatmap/:CompanyID" component={Heatmap} />
        <PrivateRoute path="/diagnostic/:CompanyID" component={Diagnostic} />
        <PrivateRoute path="/benchmark/:CompanyID" component={Benchmark} />
        <PrivateRoute path="/email" component={EmailingSystem} />
        <PrivateRoute path="/graphs" component={Graphs} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;

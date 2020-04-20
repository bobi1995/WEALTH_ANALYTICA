import React from "react";
import ReactDOM from "react-dom";
import App from "./Routes/App";
import Filters from "../src/components/data.components/Filters";
import Profile from "../src/components/data.components/Profile";
import Login from "../src/components/Login";
import Dashboard from "../src/components/data.components/Dashboard";
import Bookmarks from "../src/components/data.components/Bookmarks";
import OnePager from "../src/components/data.components/OnePager";
import PlanProfile from "../src/components/data.components/PlanProfile";
import SavedFilters from "../src/components/data.components/SavedFilters";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("FILTER renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Filters />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("PROFILE renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Profile />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("LOGIN renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("BOOKMARK renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Bookmarks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("DASHBOARD renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("ONEPAGER renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OnePager />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("PLANPROFILE renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PlanProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("SAVEDFILTERS renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SavedFilters />, div);
  ReactDOM.unmountComponentAtNode(div);
});

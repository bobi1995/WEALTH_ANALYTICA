import React from "react";
import AddUser from "./BusinessManagement/AddUser";
import AllUsers from "./BusinessManagement/AllUsers";
import FreeStates from "./BusinessManagement/FreeStates";
const BusinessManagement = () => {
  return (
    <div className="plan-businessInfo">
      <h1 className="onepager-bottomtables-h1">User Management</h1>

      <div className="onepager-charts-all">
        <AddUser />
        <AllUsers />
        <FreeStates />
      </div>
    </div>
  );
};

export default BusinessManagement;

import React from "react";
import AddUser from "./BusinessManagement/AddUser";
import AllUsers from "./BusinessManagement/AllUsers";
import FreeStates from "./BusinessManagement/FreeStates";
const BusinessManagement = (props) => {
  return (
    <div
      className="plan-businessInfo usermanagement"
      id="businessManagement-div"
    >
      <h1 className="onepager-bottomtables-h1">User Management</h1>

      <div className="onepager-charts-all">
        <AddUser />
        <AllUsers subUsersPass={props.passSubUsers} />
      </div>
      <FreeStates subUsers={props.subUsers} />
    </div>
  );
};

export default BusinessManagement;

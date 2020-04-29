import React, { useState } from "react";
import Datanavbar from "./DataNavbar";
import PurchaseState from "./UserProfile/PurchaseState";
import BusinessManagement from "./UserProfile/BusinessManagement";
import "../../styles/dataPages/userProfile.scss";
import PersonalDataStates from "./UserProfile/PersonalDataStates";
const Profile = () => {
  const [subUsers, setSubUsers] = useState([]);
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Your Profile</h1>
      </section>
      <PersonalDataStates />
      {sessionStorage.getItem("isBusiness") === "true" ? (
        <BusinessManagement
          subUsers={subUsers}
          passSubUsers={(users) => {
            setSubUsers(users);
          }}
        />
      ) : (
        ""
      )}
      <PurchaseState />
    </div>
  );
};

export default Profile;

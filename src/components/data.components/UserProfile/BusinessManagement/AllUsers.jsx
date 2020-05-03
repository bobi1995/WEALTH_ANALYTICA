import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";
import apiAddress from "../../../../global/endpointAddress";

const AllUsers = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `${apiAddress}/api/Users/GetCompanyUsers`;

    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setUsers(res.data);
        props.subUsersPass(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="freestates-div-content responsive-table-div">
      <h1 className="purchase-totalAmount">Users</h1>

      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Check States</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {users.map((user, index) => (
            <tr key={index}>
              {console.log(user)}
              <td>
                {user.FirstName} {user.LastName}
              </td>
              <td>{user.Email}</td>
              <td>{user.CompanyPhone}</td>
              <td>
                <SingleUser user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

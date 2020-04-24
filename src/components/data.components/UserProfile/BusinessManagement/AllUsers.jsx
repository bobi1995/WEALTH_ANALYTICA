import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";
const AllUsers = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `http://pensionswebapi.azurewebsites.net/api/Users/GetCompanyUsers`;

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
    <div className="onepager-chart-content responsive-table-div">
      <h1 className="purchase-totalAmount">Users</h1>

      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Check States</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {user.FirstName} {user.LastName}
              </td>
              <td>{user.Email}</td>
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

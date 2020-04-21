import React, { useState, useEffect } from "react";
import axios from "axios";
const AllUsers = () => {
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
        console.log(res.data);
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.FirstName}</td>
              <td>{user.LastName}</td>
              <td>{user.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

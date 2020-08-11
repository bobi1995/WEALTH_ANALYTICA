import React, { useState } from "react";

export default (props) => {
  const database = props.info;
  return (
    <div className="plan-businessInfo-2">
      <div
        className="plan-table-section responsive-table-div"
        style={{ marginTop: "3%" }}
      >
        <table className="table table-striped table-bordered table-sm table-hover ">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Website</th>
              <th>Opinion</th>
              <th>Opinion Description</th>
              <th>Audit Scope</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {database.map((el) => (
              <tr key={el.Name}>
                <td>{el.Name}</td>
                <td>
                  <a href={el.Website} target="_blank">
                    {el.Website}
                  </a>
                </td>
                <td style={{ whiteSpace: "normal" }}>{el.Opinion}</td>
                <td style={{ whiteSpace: "normal" }}>
                  {el.OpinionDescription}
                </td>
                <td style={{ whiteSpace: "normal" }}>{el.AuditScope}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

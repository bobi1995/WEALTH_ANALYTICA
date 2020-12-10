import React from "react";
import commonFunctions from "../../commonFunctions/common";
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
              <th>Audit Scope</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {database.map((el) => {
              const partsWeb = el.Website ? el.Website.split(":") : "";
              return (
                <tr key={el.Name}>
                  <td>{commonFunctions.formatString(el.Name)}</td>
                  <td>
                    {partsWeb.length > 1 ? (
                      <a
                        href={el.Website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {el.Website}
                      </a>
                    ) : (
                      <a
                        href={"http://" + el.Website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {el.Website}
                      </a>
                    )}
                  </td>
                  <td
                    style={{ whiteSpace: "normal" }}
                    className="onepager-pesion-description"
                  >
                    {el.Opinion}
                    <span
                      className="onepager-tooltip"
                      style={{ whiteSpace: "normal" }}
                    >
                      {el.OpinionDescription}
                    </span>
                  </td>
                  <td style={{ whiteSpace: "normal" }}>{el.AuditScope}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
